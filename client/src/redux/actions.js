// @flow

const syncFirebase = (snap: Object) => ({
  type: 'SYNC_FIREBASE',
  snap
})

const actions = {
  syncFirebase
}

export default actions
