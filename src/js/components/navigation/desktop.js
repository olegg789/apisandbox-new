import React from 'react';
import { useSelector } from "react-redux";
import { withRouter } from '@reyzitwo/react-router-vkminiapps';

import {
  SplitCol,
	Panel,
	PanelHeader,
	Group,
	Cell
} from '@vkontakte/vkui';
import { Icon28ArrowUpCircleOutline, Icon28BookOutline, Icon28SettingsOutline} from '@vkontakte/icons';

function DesktopNavigation({ router }) {
  const hasHeader = useSelector((state) => state.main.hasHeader)

	return(
    <SplitCol fixed width='280px' maxWidth='280px'>
      <Panel id='menuDesktop'>
        {hasHeader && <PanelHeader/>}
        <Group>
          <Cell
            onClick={() => router.toView('api')}
            disabled={router.activeView === 'api'}
            before={<Icon28ArrowUpCircleOutline/>}
            className={router.activeView === 'api' ? 'activeViewCell' : ''}
          >
            VK API
          </Cell>

          <Cell
            onClick={() => router.toView('bridge')}
            disabled={router.activeView === 'bridge'}
            before={<Icon28BookOutline/>}
            className={router.activeView === 'bridge' ? 'activeViewCell' : ''}
          >
            VK Bridge
          </Cell>

            <Cell
                onClick={() => router.toView('settings')}
                disabled={router.activeView === 'settings'}
                before={<Icon28SettingsOutline/>}
                className={router.activeView === 'settings' ? 'activeViewCell' : ''}
            >
                Настройки
            </Cell>
        </Group>

      </Panel>
    </SplitCol>
	)
}

export default withRouter(DesktopNavigation);