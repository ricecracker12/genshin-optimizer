'use client'
import {
  ColorText,
  ImgIcon,
  SqBadge,
  TranslateBase,
} from '@genshin-optimizer/common/ui'
import '@genshin-optimizer/zzz/theme' // import to validate typing for color variants
import { commonDefIcon } from '@genshin-optimizer/zzz/assets'
import type { ReactNode } from 'react'

const textComponents = {
  fire: <ColorText color="fire" />,
  ice: <ColorText color="ice" />,
  electric: <ColorText color="electric" />,
  frost: <ColorText color="frost" />,
  physical: <ColorText color="physical" />,
  ether: <ColorText color="ether" />,
  ct: <ColorText />,
  IconNormal: <ImgIcon src={commonDefIcon('basicFlat')} size={1.5} />,
  IconEvade: <ImgIcon src={commonDefIcon('dodgeFlat')} size={1.5} />,
  IconSpecial: <ImgIcon src={commonDefIcon('specialFlat')} size={1.5} />,
  IconSpecialReady: (
    <ImgIcon src={commonDefIcon('specialReadyFlat')} size={1.5} />
  ),
  IconSpecialReadyRp: (
    <ImgIcon src={commonDefIcon('specialRpReadyFlat')} size={1.5} />
  ),
  IconUltimateReady: (
    <ImgIcon src={commonDefIcon('chainReadyFlat')} size={1.5} />
  ),
  IconSwitch: <ImgIcon src={commonDefIcon('assistFlat')} size={1.5} />,
}

const badgeComponents = {
  fire: <SqBadge color="fire" />,
  ice: <SqBadge color="ice" />,
  electric: <SqBadge color="electric" />,
  frost: <SqBadge color="frost" />,
  physical: <SqBadge color="physical" />,
  ether: <SqBadge color="ether" />,
  ct: <ColorText />,
}

export function Translate({
  ns,
  key18,
  values,
  children,
  useBadge,
}: {
  ns: string
  key18: string
  values?: Record<string, string | number>
  children?: ReactNode
  useBadge?: boolean
}) {
  return (
    <TranslateBase
      ns={ns}
      key18={key18}
      values={values}
      children={children}
      components={useBadge ? badgeComponents : textComponents}
    />
  )
}
