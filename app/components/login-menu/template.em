if session.isAuthenticated
  a{ action 'invalidateSession' } href='#'
    | Sign Out
else
  a{ action 'authenticate' } href='#'
    | Sign In
