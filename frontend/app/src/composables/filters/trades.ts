import { Ref } from 'vue';
import { useAssetInfoRetrieval } from '@/store/assets/retrieval';
import { useAssociatedLocationsStore } from '@/store/history/associated-locations';
import { useFrontendSettingsStore } from '@/store/settings/frontend';
import { MatchedKeyword, SearchMatcher } from '@/types/filtering';
import { TradeType } from '@/types/history/trades';
import { convertToTimestamp, getDateInputISOFormat } from '@/utils/date';

enum TradeFilterKeys {
  BASE = 'base',
  QUOTE = 'quote',
  ACTION = 'action',
  START = 'start',
  END = 'end',
  LOCATION = 'location'
}

enum TradeFilterValueKeys {
  BASE = 'baseAsset',
  QUOTE = 'quoteAsset',
  ACTION = 'tradeType',
  START = 'fromTimestamp',
  END = 'toTimestamp',
  LOCATION = 'location'
}

export const useTradeFilters = () => {
  const filters: Ref<MatchedKeyword<TradeFilterValueKeys>> = ref({});

  const { dateInputFormat } = storeToRefs(useFrontendSettingsStore());
  const { associatedLocations } = storeToRefs(useAssociatedLocationsStore());
  const { assetIdentifierForSymbol } = useAssetInfoRetrieval();
  const i18n = useI18n();

  const matchers = computed<
    SearchMatcher<TradeFilterKeys, TradeFilterValueKeys>[]
  >(() => [
    {
      key: TradeFilterKeys.BASE,
      keyValue: TradeFilterValueKeys.BASE,
      description: i18n.t('closed_trades.filter.base_asset').toString(),
      suggestions: () => [],
      validate: () => true,
      transformer: (asset: string) => assetIdentifierForSymbol(asset) ?? ''
    },
    {
      key: TradeFilterKeys.QUOTE,
      keyValue: TradeFilterValueKeys.QUOTE,
      description: i18n.t('closed_trades.filter.quote_asset').toString(),
      suggestions: () => [],
      validate: () => true,
      transformer: (asset: string) => assetIdentifierForSymbol(asset) ?? ''
    },
    {
      key: TradeFilterKeys.ACTION,
      keyValue: TradeFilterValueKeys.ACTION,
      description: i18n.t('closed_trades.filter.trade_type').toString(),
      suggestions: () => TradeType.options,
      validate: type => (TradeType.options as string[]).includes(type)
    },
    {
      key: TradeFilterKeys.START,
      keyValue: TradeFilterValueKeys.START,
      description: i18n.t('closed_trades.filter.start_date').toString(),
      suggestions: () => [],
      hint: i18n
        .t('closed_trades.filter.date_hint', {
          format: getDateInputISOFormat(get(dateInputFormat))
        })
        .toString(),
      validate: value => {
        return (
          value.length > 0 &&
          !isNaN(convertToTimestamp(value, get(dateInputFormat)))
        );
      },
      transformer: (date: string) =>
        convertToTimestamp(date, get(dateInputFormat)).toString()
    },
    {
      key: TradeFilterKeys.END,
      keyValue: TradeFilterValueKeys.END,
      description: i18n.t('closed_trades.filter.end_date').toString(),
      suggestions: () => [],
      hint: i18n
        .t('closed_trades.filter.date_hint', {
          format: getDateInputISOFormat(get(dateInputFormat))
        })
        .toString(),
      validate: value => {
        return (
          value.length > 0 &&
          !isNaN(convertToTimestamp(value, get(dateInputFormat)))
        );
      },
      transformer: (date: string) =>
        convertToTimestamp(date, get(dateInputFormat)).toString()
    },
    {
      key: TradeFilterKeys.LOCATION,
      keyValue: TradeFilterValueKeys.LOCATION,
      description: i18n.t('closed_trades.filter.location').toString(),
      suggestions: () => get(associatedLocations),
      validate: location => get(associatedLocations).includes(location as any)
    }
  ]);

  const updateFilter = (newFilters: MatchedKeyword<TradeFilterKeys>) => {
    set(filters, newFilters);
  };

  return {
    filters,
    matchers,
    updateFilter
  };
};