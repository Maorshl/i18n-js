import { DateTime, Dict, I18nOptions, MissingPlaceholderHandler, NullPlaceholderHandler, Scope, TimeAgoInWordsOptions, ToNumberOptions, ToSentenceOptions, TranslateOptions } from "../index.d";
import { Locales } from "./Locales";
import { Pluralization } from "./Pluralization";
import { MissingTranslation } from "./MissingTranslation";
export declare class I18n {
    private _locale;
    private _defaultLocale;
    defaultSeparator: string;
    enableFallback: boolean;
    locales: Locales;
    pluralization: Pluralization;
    missingBehavior: string;
    missingTranslation: MissingTranslation;
    missingTranslationPrefix: string;
    placeholder: RegExp;
    translations: Dict;
    missingPlaceholder: MissingPlaceholderHandler;
    nullPlaceholder: NullPlaceholderHandler;
    transformKey: (key: string) => string;
    constructor(translations?: Dict, options?: Partial<I18nOptions>);
    store(translations: Dict): void;
    get locale(): string;
    set locale(newLocale: string);
    get defaultLocale(): string;
    set defaultLocale(newLocale: string);
    toNumber(numeric: number, options?: ToNumberOptions): string;
    toCurrency(amount: number, options?: ToNumberOptions): string;
    toHumanSize(numeric: number, options?: ToNumberOptions): string;
    translate(scope: Scope, options?: TranslateOptions): string;
    t: (scope: Scope, options?: TranslateOptions | undefined) => string;
    pluralize(count: number, scope: Scope, options?: TranslateOptions): string;
    p: (count: number, scope: Scope, options?: TranslateOptions | undefined) => string;
    localize(type: string, value: string | number | Date | null | undefined, options?: Dict): string;
    l: (type: string, value: string | number | Date | null | undefined, options?: Dict | undefined) => string;
    toTime(scope: Scope, input: DateTime): string;
    toPercentage(numeric: number, options?: ToNumberOptions): string;
    withLocale(locale: string, callback: () => void): Promise<void>;
    strftime(date: Date, format: string): string;
    update(path: string, override: unknown, strict?: boolean): void;
    toSentence(items: any[], options?: ToSentenceOptions): string;
    timeAgoInWords(fromTime: DateTime, toTime: DateTime, options?: TimeAgoInWordsOptions): string;
    distanceOfTimeInWords: (fromTime: DateTime, toTime: DateTime, options?: TimeAgoInWordsOptions) => string;
    private get;
}
