// @flow

const firebase = (state: Object = {}, action: Object) => {
	switch (action.type) {
		case 'SYNC_FIREBASE':
			return Object.assign({}, state, action.snap)
		default:
			return state
	}
}

export default firebase
