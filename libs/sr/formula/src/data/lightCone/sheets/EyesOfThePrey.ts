import { cmpGE, subscript } from '@genshin-optimizer/pando/engine'
import type { LightConeKey } from '@genshin-optimizer/sr/consts'
import { allStats, mappedStats } from '@genshin-optimizer/sr/stats'
import { own, ownBuff, registerBuff } from '../../util'
import { entriesForLightCone, registerLightCone } from '../util'

const key: LightConeKey = 'EyesOfThePrey'
const data_gen = allStats.lightCone[key]
const dm = mappedStats.lightCone[key]
const lcCount = own.common.count.sheet(key)
const { superimpose } = own.lightCone

const sheet = registerLightCone(
  key,
  // Handles base stats and passive buffs
  entriesForLightCone(key, data_gen),

  registerBuff(
    'dot_dmg_',
    ownBuff.premod.dmg_.addWithDmgType(
      'dot',
      cmpGE(lcCount, 1, subscript(superimpose, dm.dot_dmg_))
    ),
    cmpGE(lcCount, 1, 'infer', '')
  )
)
export default sheet
