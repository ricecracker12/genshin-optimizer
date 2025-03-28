import { dumpFile } from '@genshin-optimizer/common/pipeline'
import { nameToKey } from '@genshin-optimizer/common/util'
import { TextMapEN } from '../../TextMapUtil'
import { PROJROOT_PATH } from '../../consts'
import type { DArtifactSlotKey } from '../../mapping'
import { readDMJSON } from '../../util'

type ReliquaryExcelConfigData = {
  equipType: DArtifactSlotKey //"EQUIP_BRACER",
  showPic: string //"Eff_UI_RelicIcon_10003_4",
  rankLevel: number //1,
  mainPropDepotId: number //4000,
  appendPropDepotId: number //101,
  setId?: number //10003,
  addPropLevels: number[]
  // [
  //   5,
  //   9,
  //   13,
  //   17,
  //   21
  // ],
  baseConvExp: number //420,
  maxLevel: number //5,
  storyId: number //180034,
  destroyRule: 'DESTROY_RETURN_MATERIAL'
  destroyReturnMaterial: number[]
  // [
  //   202
  // ],
  destroyReturnMaterialCount: number[]
  // [
  //   420
  // ],
  id: number //53140,
  nameTextMapHash: number //2752003612,
  descTextMapHash: number //3184282712,
  icon: string //"UI_RelicIcon_10003_4",
  itemType: string //"ITEM_RELIQUARY",
  weight: number //1,
  rank: number //10,
  gadgetId: number //70600041
}
const reliquaryExcelConfigDataSrc = JSON.parse(
  readDMJSON('ExcelBinOutput/ReliquaryExcelConfigData.json')
) as ReliquaryExcelConfigData[]

const reliquaryExcelConfigData = Object.fromEntries(
  reliquaryExcelConfigDataSrc.map((data) => [data.id, data])
) as Record<number, ReliquaryExcelConfigData>

dumpFile(
  `${PROJROOT_PATH}/src/dm/artifact/ReliquaryExcelConfigData_idmap_gen.json`,
  Object.fromEntries(
    reliquaryExcelConfigDataSrc.map((data) => [
      data.id,
      [data.setId, nameToKey(TextMapEN[data.nameTextMapHash])],
    ])
  )
)

export { reliquaryExcelConfigData }
