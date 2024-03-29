'use strict';

const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

const stripe = require('stripe')(functions.config().stripe.token);
const currency = functions.config().stripe.currency || 'USD';

const twilio = require('twilio');
const accountSid = 'ACf5211f1f374813741cac38df598da18d';
const authToken = '38f50421f060b7c6f66dc8872b47a275';
const client = twilio(accountSid, authToken);
const twilioNumber = '';
const tarbooshFaxNo = '';

/exports.sendOrderFax = functions.database.ref(`/customers/{userId}/orders/{id}`)
	.onCreate((snap, context) => {
		const val = snap.val();

      return admin.database().ref(`/customers/${context.params.userId}/customer_id`)
          .once('value').then((snapshot) => {
						return snapshot.val();
					}).then((customer) => {
						
						const faxBody = val.menuItems
					})
	});

 // Create and Deploy Your First Cloud Functions
 // https://firebase.google.com/docs/functions/write-firebase-functions

// This was taken directly from the firebase/Stripe function-examples here:
// SOURCE: https://github.com/firebase/functions-samples/blob/master/stripe/functions/index.js#L25
exports.createStripeCharge = functions.database.ref(`/customers/{userId}/charges/{id}`)
    .onCreate((snap, context) => {
      const val = snap.val();
      // Look up the Stripe customer id written in createStripeCustomer
      return admin.database().ref(`/customers/${context.params.userId}/customer_id`)
          .once('value').then((snapshot) => {
            return snapshot.val();
          }).then((customer) => {
            // Create a charge using the pushId as the idempotency key
            // protecting against double charges

            const amount = val.amount;
            const idempotencyKey = context.params.id;
            const charge = {amount, currency, customer};
            if (val.source !== null) {
              charge.source = val.source;
            }
            return stripe.charges.create(charge, {idempotency_key: idempotencyKey});
          }).then((response) => {
            // If the result is successful, write it back to the database
            return snap.ref.set(response);
          }).catch((error) => {
            // We want to capture errors and render them in a user-friendly way, while
            // still logging an exception with StackDriver
            return snap.ref.child('error').set(userFacingMessage(error));
          }).then(() => {
            return reportError(error, {user: context.params.userId});
          });
        });

exports.createStripeCustomer = functions.auth.user().onCreate((user) => {
  return stripe.customers.create({
    email: user.email,
  }).then((customer) => {
    return admin.database().ref(`/customers/${user.uid}/customer_id`).set(customer.id);
  });
});

// Add a payment source (card) for a user by writing a stripe payment source token to Realtime database
exports.addPaymentSource = functions.database
    .ref('/customers/{userId}/sources/{pushId}/token').onWrite((change, context) => {
      const source = change.after.val();
      if (source === null){
        return null;
      }
      return admin.database().ref(`/customers/${context.params.userId}/customer_id`)
          .once('value').then((snapshot) => {
            return snapshot.val();
          }).then((customer) => {
            return stripe.customers.createSource(customer, {source});
          }).then((response) => {
            return change.after.ref.parent.set(response);
          }, (error) => {
            return change.after.ref.parent.child('error').set(userFacingMessage(error));
          }).then(() => {
            return reportError(error, {user: context.params.userId});
          });
        });


// When a user deletes their account, clean up after them
exports.cleanupUser = functions.auth.user().onDelete((user) => {
  return admin.database().ref(`/customers/${user.uid}`).once('value').then(
      (snapshot) => {
        return snapshot.val();
      }).then((customer) => {
        return stripe.customers.del(customer.customer_id);
      }).then(() => {
        return admin.database().ref(`/customers/${user.uid}`).remove();
      });
    });

function reportError(err, context = {}) {
  // This is the name of the StackDriver log stream that will receive the log
  // entry. This name can be any valid log stream name, but must contain "err"
  // in order for the error to be picked up by StackDriver Error Reporting.
  const logName = 'errors';
  const log = logging.log(logName);

  // https://cloud.google.com/logging/docs/api/ref_v2beta1/rest/v2beta1/MonitoredResource
  const metadata = {
    resource: {
      type: 'cloud_function',
      labels: {function_name: process.env.FUNCTION_NAME},
    },
  };

  // https://cloud.google.com/error-reporting/reference/rest/v1beta1/ErrorEvent
  const errorEvent = {
    message: err.stack,
    serviceContext: {
      service: process.env.FUNCTION_NAME,
      resourceType: 'cloud_function',
    },
    context: context,
  };

  // Write the error log entry
  return new Promise((resolve, reject) => {
    log.write(log.entry(metadata, errorEvent), (error) => {
      if (error) {
       return reject(error);
      }
      return resolve();
    });
  });
}

// Sanitize the error message for the user
function userFacingMessage(error) {
  return error.type ? error.message : 'An error occurred, developers have been alerted';
}
