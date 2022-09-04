
function handleRootGet(req, res) {
    return res.sendStatus(200)
}

function handleInviteRoute(req, res) {
    res.render('invite.html');
}

module.exports = {
    handleRootGet,
    handleInviteRoute
}