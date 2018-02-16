alias claer='clear'
alias celar='clear'
alias clare='clear'
alias clera='clear'
alias cls='clear'
alias clc='clear'

alias dir='ls'

alias gs='git status'
alias ga='git add'
alias gc='git commit -m'
alias gp='git push'
alias gd='git diff'

alias python='python3'

alias yt='yarn test Signin'

alias xmac0='openssl rand -hex 6 | sed '"'"'s/\(..\)/\1:/g; s/.$//'"'"' | xargs sudo ifconfig en0 ether & ifconfig en0 | grep ether'

alias xmac1='openssl rand -hex 6 | sed '"'"'s/\(..\)/\1:/g; s/.$//'"'"' | xargs sudo ifconfig en1 ether & ifconfig en1 | grep ether'

alias say='sh ~/.say_something.sh'

[[ -s "$HOME/.rvm/scripts/rvm" ]] && source "$HOME/.rvm/scripts/rvm" # Load RVM into a shell session *as a function*

source ~/.profile

alias nc='sh ~/.create_component.sh'
export GPG_TTY=$(tty)
