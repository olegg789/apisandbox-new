import React from 'react';
import { withRouter } from '@reyzitwo/react-router-vkminiapps';

import {
	Tabbar,
	TabbarItem
} from '@vkontakte/vkui';
import {Icon28ArrowUpCircleOutline, Icon28BookOutline, Icon28SettingsOutline,} from '@vkontakte/icons';

function MobailNavigation({ router }) {

	function openView(view) {
		let nowView = router.activeView
		router.toView(view)
		
		if (view === nowView) {
		  router.toHash(`${view}`)
		}
	}

	return(
	    <Tabbar>
	      <TabbarItem
	        selected={router.activeView === 'api'}
	        onClick={() => openView('api')}
	        text='VK API'
	      ><Icon28ArrowUpCircleOutline/></TabbarItem>

	      <TabbarItem
	        data-id='bridge'
	        selected={router.activeView === 'bridge'}
					onClick={() => openView('bridge')}
	        text='VK Bridge'
	      ><Icon28BookOutline/></TabbarItem>

			<TabbarItem
				data-id='settings'
				selected={router.activeView === 'settings'}
				onClick={() => openView('settings')}
				text='Настройки'
			><Icon28SettingsOutline/></TabbarItem>
	    </Tabbar>
	)
}

export default withRouter(MobailNavigation);