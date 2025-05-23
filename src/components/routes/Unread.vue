<template>
	<ContentTemplate :items="unread() ?? []"
		:fetch-key="'unread'"
		@load-more="fetchMore()">
		<template #header>
			{{ t('news', 'Unread Articles') }}
			<NcCounterBubble class="counter-bubble" :count="items.unreadCount" />
		</template>
	</ContentTemplate>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'

import NcCounterBubble from '@nextcloud/vue/dist/Components/NcCounterBubble.js'

import ContentTemplate from '../ContentTemplate.vue'

import { FeedItem } from '../../types/FeedItem'
import { ACTIONS, MUTATIONS } from '../../store'

type UnreadItemState = {
	// need cache so we aren't always removing items when they get read
	unreadCache?: FeedItem[]
}

export default Vue.extend({
	components: {
		ContentTemplate,
		NcCounterBubble,
	},
	data() {
		return {
			unreadCache: undefined,
		} as UnreadItemState
	},
	computed: {
		...mapState(['items']),
		newestItemId() {
			return this.$store.state.items.newestItemId === 0
		},
	},
	watch: {
		newestItemId(clearCache) {
			if (clearCache) {
				this.unreadCache = undefined
			}
		},
	},
	created() {
		this.$store.commit(MUTATIONS.SET_SELECTED_ITEM, { id: undefined })
		if (this.unread() === undefined) {
			this.$store.dispatch(ACTIONS.FETCH_UNREAD)
		}
	},
	methods: {
		unread() {
			if (!this.unreadCache) {
				if (this.$store.getters.unread.length > 0) {
					this.unreadCache = this.$store.getters.unread
				}
			} else {
				for (const item of this.$store.getters.unread) {
					if (this.unreadCache.find((unread: FeedItem) => unread.id === item.id) === undefined) {
						this.unreadCache.push(item)
					}
				}
			}

			return this.unreadCache
		},
		async fetchMore() {
			if (!this.$store.state.items.fetchingItems.unread) {
			  this.$store.dispatch(ACTIONS.FETCH_UNREAD)
			}
		},
	},
})
</script>

<style scoped>
	.counter-bubble {
		display: inline-block;
		vertical-align: sub;
		margin-left: 10px;
	}
</style>
