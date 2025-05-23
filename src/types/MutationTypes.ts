export const FEED_MUTATION_TYPES = {
	ADD_FEED: 'ADD_FEED',
	SET_FEEDS: 'SET_FEEDS',
	UPDATE_FEED: 'UPDATE_FEED',
	MOVE_FEED: 'MOVE_FEED',

	SET_NEWEST_ITEM_ID: 'SET_NEWEST_ITEM_ID',
	SET_FEED_ALL_READ: 'SET_FEED_ALL_READ',
	MODIFY_FEED_UNREAD_COUNT: 'MODIFY_FEED_UNREAD_COUNT',
	MODIFY_STARRED_COUNT: 'MODIFY_STARRED_COUNT',

	FEED_DELETE: 'FEED_DELETE',
}

export const FOLDER_MUTATION_TYPES = {
	SET_FOLDERS: 'SET_FOLDERS',
	DELETE_FOLDER: 'DELETE_FOLDER',
	UPDATE_FOLDER: 'UPDATE_FOLDER',
	REMOVE_FOLDER_FEED: 'REMOVE_FOLDER_FEED',

	MODIFY_FOLDER_UNREAD_COUNT: 'MODIFY_FOLDER_UNREAD_COUNT',
}

export const FEED_ITEM_MUTATION_TYPES = {
	SET_ITEMS: 'SET_ITEMS',
	UPDATE_ITEM: 'UPDATE_ITEM',

	SET_SELECTED_ITEM: 'SET_SELECTED_ITEM',
	SET_PLAYING_ITEM: 'SET_PLAYING_ITEM',

	SET_STARRED_COUNT: 'SET_STARRED_COUNT',
	SET_UNREAD_COUNT: 'SET_UNREAD_COUNT',
	MODIFY_UNREAD_COUNT: 'MODIFY_UNREAD_COUNT',

	SET_FETCHING: 'SET_FETCHING',
	SET_ALL_LOADED: 'SET_ALL_LOADED',
	SET_LAST_ITEM_LOADED: 'SET_LAST_ITEM_LOADED',
	SET_NEWEST_ITEM_ID: 'SET_NEWEST_ITEM_ID',
	RESET_ITEM_STATES: 'RESET_ITEM_STATES',
}

export const APPLICATION_MUTATION_TYPES = {
	SET_ERROR: 'SET_ERROR',
	SET_LOADING: 'SET_LOADING',
}
