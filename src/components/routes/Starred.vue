<template>
	<ContentTemplate :items="starred"
		:fetch-key="feedId ? 'starredfeed-'+feedId : 'starred'"
		@load-more="fetchMore()">
		<template #header>
			{{ t('news', 'Starred') }}
			<NcCounterBubble class="counter-bubble" :count="feedId ? starred.length : items.starredCount" />
		</template>
	</ContentTemplate>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'

import NcCounterBubble from '@nextcloud/vue/dist/Components/NcCounterBubble.js'

import ContentTemplate from '../ContentTemplate.vue'

import { FeedItem } from '../../types/FeedItem'
import { ACTIONS } from '../../store'

export default Vue.extend({
	components: {
		ContentTemplate,
		NcCounterBubble,
	},
	props: {
		feedId: {
			type: String,
			required: false,
			default: undefined,
		},
	},
	computed: {
		...mapState(['items']),
		starred(): FeedItem[] {
			if (this.feedId) {
				return this.$store.getters.starred.filter((item: FeedItem) => item.feedId === Number(this.feedId))
			}
			return this.$store.getters.starred
		},
	},
	methods: {
		async fetchMore() {
			if (!this.$store.state.items.fetchingItems.starred) {
			  this.$store.dispatch(ACTIONS.FETCH_STARRED, { feedId: this.feedId === undefined ? 0 : Number(this.feedId) })
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
