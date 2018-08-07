import { LuaArray, LuaObj } from "@wowts/lua";
export declare type UIPosition = "TOPLEFT" | "CENTER" | "BOTTOMLEFT";
export declare type UIAnchor = "ANCHOR_BOTTOMLEFT" | "ANCHOR_NONE";
export interface UIRegion {
    CanChangeProtectedState(): boolean;
    ClearAllPoints(): void;
    GetCenter(): [number, number];
    GetWidth(): number;
    GetHeight(): number;
    GetParent(): UIRegion;
    SetParent(parent: UIRegion): void;
    SetAllPoints(around: UIFrame): void;
    SetParent(parent: UIFrame): void;
    SetPoint(anchor: UIPosition, x: number, y: number): void;
    SetPoint(anchor: UIPosition, reference: UIFrame, refAnchor: UIPosition, x: number, y: number): void;
    SetWidth(width: number): void;
    SetHeight(height: number): void;
}
export interface UIFrame extends UIRegion {
    SetAlpha(value: number): void;
    SetScript(event: "OnEvent", func: (frame: UIFrame, event: string, ...args: any[]) => void): void;
    SetScript(event: "OnSizeChanged" | "OnMouseUp" | "OnEnter" | "OnLeave" | "OnMouseDown" | "OnHide" | "OnUpdate" | "OnEvent", func: (frame: UIFrame, ...args: any[]) => void): void;
    StartMoving(): void;
    StopMovingOrSizing(): void;
    SetMovable(movable: boolean): void;
    SetFrameStrata(strata: "MEDIUM"): void;
    Show(): void;
    Hide(): void;
    IsShown(): boolean;
    CreateTexture(): UITexture;
    EnableMouse(enabled: boolean): void;
    CreateFontString(name: string, layer?: "OVERLAY", inherits?: string): UIFontString;
    SetAttribute(key: string, value: string): void;
    SetScale(scale: number): void;
    IsVisible(): boolean;
    RegisterEvent(event: string): void;
}
export interface UIMessageFrame extends UIFrame {
    AddMessage(message: string): void;
}
export interface UIFontString extends UIFrame {
    SetText(text: string): void;
    SetFont(font: string, height: number, flags: number): void;
    SetFontObject(name: "GameFontNormalSmall"): void;
    SetTextColor(r: number, g: number, b: number, alpha?: number): void;
    SetFormattedText(text: string, ...args: any[]): void;
    SetVertexColor(r: number, g: number, b: number, alpha?: number): void;
    SetJustifyH(justify: "left" | "right"): void;
    GetFont(): [string, number, number];
}
export interface UICheckButton extends UIFrame {
    SetChecked(checked: boolean): void;
    GetChecked(): boolean;
    RegisterForClicks(type: "AnyUp" | "AnyDown" | "LeftButtonDown" | "LeftButtonUp" | "MiddleButtonDown" | "MiddleButtonUp" | "RightButtonDown" | "RightButtonUp"): void;
}
export interface UIDropdown extends UIFrame {
}
export interface UITexture extends UIFrame {
    SetTexture(name: string): void;
    SetColorTexture(r: number, g: number, b: number, alpha?: number): void;
    SetVertexColor(r: number, g: number, b: number, alpha?: number): void;
}
export interface UIGameTooltip extends UIFrame {
    SetOwner(frame: UIFrame, anchor: UIAnchor): void;
    SetText(text: string, r?: number, g?: number, b?: number): void;
    AddLine(text: string, r?: number, g?: number, b?: number): void;
    ClearLines(): void;
    SetInventoryItem(unit: string, slot: number): void;
    NumLines(): number;
    GetText(): string;
}
export interface UICooldown extends UIFrame {
    GetCooldownDuration(): number;
    SetDrawEdge(enable: boolean): void;
    SetSwipeColor(r: number, g: number, b: number, alpha?: number): void;
    SetCooldown(start: number, duration: number): void;
}
export declare class EventDispatcher {
    events: {
        [key: string]: FakeFrame[];
    };
    RegisterEvent(frame: FakeFrame, event: string): void;
    DispatchEvent(event: string, ...params: any[]): void;
}
export declare const eventDispatcher: EventDispatcher;
export declare class FakeFrame implements UIFrame {
    scriptHandlers: {
        [script: string]: (frame: UIFrame, ...parameters: any[]) => void;
    };
    RegisterEvent(event: string): void;
    mouseEnabled: boolean;
    shown: boolean;
    strata: string;
    movable: boolean;
    alpha: number;
    SetAlpha(value: number): void;
    SetScript(event: string, func: (frame: UIFrame, ...parameters: any[]) => void): void;
    StartMoving(): void;
    StopMovingOrSizing(): void;
    SetMovable(movable: boolean): void;
    SetFrameStrata(strata: "MEDIUM"): void;
    Show(): void;
    Hide(): void;
    IsShown(): boolean;
    CreateTexture(): UITexture;
    EnableMouse(enabled: boolean): void;
    CreateFontString(name: string, layer?: "OVERLAY" | undefined, inherits?: string | undefined): UIFontString;
    SetAttribute(key: string, value: string): void;
    SetScale(scale: number): void;
    IsVisible(): boolean;
    CanChangeProtectedState(): boolean;
    ClearAllPoints(): void;
    GetCenter(): [number, number];
    GetWidth(): number;
    GetHeight(): number;
    GetParent(): UIRegion;
    SetParent(parent: UIRegion): void;
    SetParent(parent: UIFrame): void;
    SetAllPoints(around: UIFrame): void;
    SetPoint(anchor: UIPosition, x: number, y: number): void;
    SetPoint(anchor: UIPosition, reference: UIFrame, refAnchor: UIPosition, x: number, y: number): void;
    SetWidth(width: number): void;
    SetHeight(height: number): void;
}
export declare class FakeMessageFrame extends FakeFrame implements UIMessageFrame {
    AddMessage(message: string): void;
}
export declare class FakeGameTooltip extends FakeFrame implements UIGameTooltip {
    private text;
    private lines;
    SetOwner(frame: UIFrame, anchor: UIAnchor): void;
    SetText(text: string, r?: number, g?: number, b?: number): void;
    AddLine(text: string, r?: number, g?: number, b?: number): void;
    ClearLines(): void;
    SetInventoryItem(unit: string, slot: number): void;
    NumLines(): number;
    GetText(): string;
}
export declare class FakeCheckButton extends FakeFrame implements UICheckButton {
    private isChecked;
    SetChecked(checked: boolean): void;
    GetChecked(): boolean;
    RegisterForClicks(type: "AnyUp" | "AnyDown" | "LeftButtonDown" | "LeftButtonUp" | "MiddleButtonDown" | "MiddleButtonUp" | "RightButtonDown" | "RightButtonUp"): void;
}
export declare class FakeDropdown extends FakeFrame implements UIDropdown {
}
export declare function GetNumSpecializations(isInspect?: boolean, isPet?: boolean): number;
export declare function GetInventorySlotInfo(slotName: string): [number, string];
export declare function GetItemStats(itemLink: string, statTable?: any[]): any[];
export declare function GetInventoryItemLink(unitId: string, slotId: number): string;
export declare function GetHaste(): number;
export declare function UnitRangedDamage(player: string): [number, number, number, number, number, number];
export declare function GetItemInfoInstant(item: string | number): [number, string, string, string, number, number, number];
export declare function CombatLogGetCurrentEventInfo(): any[];
export declare function debugprofilestop(): number;
export declare function GetActionInfo(slot: number): string[];
export declare function GetActionText(slot: number): string;
export declare function GetBindingKey(key: string): string;
export declare function GetBonusBarIndex(): void;
export declare function GetItemInfo(itemId: number | string): any[];
export declare function GetMacroItem(spellId: number): any[];
export declare function GetMacroSpell(spellId: number): number;
export declare function GetSpellInfo(spellId: number | string, bookType?: string): [string, string, string, number, number, number, number];
export declare function GetTime(): number;
export declare function InterfaceOptionsFrame_OpenToCategory(frameName: string): void;
export declare function UnitAura(unitId: string, i: number, filter: string): any[];
export declare function UnitCanAttack(unit: string, target: string): boolean;
export declare function UnitClass(unit: string): [string, "WARRIOR" | "PRIEST"];
export declare function UnitExists(unit: string): boolean;
export declare function UnitGUID(unit: string): string;
export declare function UnitHasVehicleUI(unit: string): boolean;
export declare function UnitIsDead(unit: string): boolean;
export declare function UnitName(unitId: string): string;
export declare function GetActionCooldown(action: number): [number, number, boolean];
export declare function GetActionTexture(action: number): void;
export declare function GetItemIcon(itemId: number): void;
export declare function GetItemCooldown(itemId: number): [number, number, boolean];
export declare function GetItemSpell(itemId: number): void;
export declare function GetSpellTexture(spellId: number, bookType?: string): void;
export declare function IsActionInRange(action: number, target: string): void;
export declare function IsCurrentAction(action: number): void;
export declare function IsItemInRange(itemId: number, target: string): boolean;
export declare function IsUsableAction(action: number): boolean;
export declare function IsUsableItem(itemId: number): boolean;
export declare function GetNumGroupMembers(filter: number): number;
export declare function UnitPower(unit: string, type: number, segments?: number): number;
export declare function GetPowerRegen(): [number, number];
export declare function GetManaRegen(): [number, number];
export declare function GetSpellPowerCost(spellId: number): LuaArray<{
    cost: number;
    type: number;
}>;
export declare function UnitPowerType(unit: string, powerId?: number): [number, string];
export declare function IsInGroup(filter?: number): boolean;
export declare function IsInGuild(): boolean;
export declare function IsInInstance(): boolean;
export declare function IsInRaid(filter?: number): boolean;
export declare function UnitLevel(target: string): number;
export declare function GetBuildInfo(): any[];
export declare function GetItemCount(item: string, first?: boolean, second?: boolean): void;
export declare function GetNumTrackingTypes(): number;
export declare function GetTrackingInfo(i: number): any[];
export declare function GetUnitSpeed(unit: string): number;
export declare function GetWeaponEnchantInfo(): any[];
export declare function HasFullControl(): boolean;
export declare function IsSpellOverlayed(): void;
export declare function IsStealthed(): boolean;
export declare function UnitCastingInfo(target: string): any[];
export declare function UnitChannelInfo(target: string): any[];
export declare function UnitClassification(target: string): string;
export declare function UnitCreatureFamily(target: string): void;
export declare function UnitCreatureType(target: string): void;
export declare function UnitDetailedThreatSituation(unit: string, target: string): any[];
export declare function UnitInRaid(unit: string): boolean;
export declare function UnitIsFriend(unit: string, target: string): number;
export declare function UnitIsPVP(unit: string): boolean;
export declare function UnitIsUnit(unit1: string, unit2: string): boolean;
export declare function UnitPowerMax(unit: string, power: number, segment: number): number;
export declare function UnitRace(unit: string): any[];
export declare function UnitStagger(unit: string): number;
export declare function GetSpellCharges(spellId: number): any[];
export declare function GetSpellCooldown(type: string | number, book?: string): [number, number, boolean];
export declare function GetLocale(): string;
export declare function CreateFrame(type: "GameTooltip", id?: string, parent?: UIFrame, template?: string): UIGameTooltip;
export declare function CreateFrame(type: "CheckButton", id?: string, parent?: UIFrame, template?: string): UICheckButton;
export declare function CreateFrame(type: "Dropdown", id?: string, parent?: UIFrame, template?: string): UIDropdown;
export declare function CreateFrame(type: "Frame", id?: string, parent?: UIFrame, template?: string): UIFrame;
export declare function EasyMenu(menu: any, menuFrame: UIFrame, cursor: string | UIRegion, x: number, y: number, menuType: string, autoHideDelay?: number): void;
export declare function IsShiftKeyDown(): void;
export declare function GetSpecialization(): string;
export declare function GetSpecializationInfo(spec: string): number;
export declare function GetTalentInfoByID(talent: number, spec: number): any[];
export declare function GetAuctionItemSubClasses(item: number): any[];
export declare function GetInventoryItemID(unit: string, slot: number): number;
export declare function GetInventoryItemGems(): void;
export declare function RegisterStateDriver(frame: UIFrame, property: string, state: any): void;
export declare function UnitHealth(unit: string): number;
export declare function UnitHealthMax(unit: string): number;
export declare function PlaySoundFile(file: string): void;
export declare function GetCombatRating(combatRatingIdentifier: number): number;
export declare function GetCombatRatingBonus(combatRatingIdentifier: number): number;
export declare function GetCritChance(): number;
export declare function GetMastery(): number;
export declare function GetMasteryEffect(): number;
export declare function GetMeleeHaste(): number;
export declare function GetMultistrike(): number;
export declare function GetMultistrikeEffect(): number;
export declare function GetRangedCritChance(): number;
export declare function GetRangedHaste(): number;
export declare function GetSpellBonusDamage(school: number): number;
export declare function GetSpellBonusHealing(): number;
export declare function GetSpellCritChance(school: number): number;
export declare function UnitAttackPower(unitId: string): number[];
export declare function UnitAttackSpeed(unitId: string): number[];
export declare function UnitDamage(unitId: string): number[];
export declare function UnitRangedAttackPower(unitId: string): number[];
export declare function UnitSpellHaste(unitId: string): number;
export declare function UnitStat(unitId: string, stat: number): number;
export declare function GetRuneCooldown(slot: number): number[];
export declare function SendAddonMessage(MSG_PREFIX: string, message: string, channel: string): void;
export declare function print(s: any): void;
export declare function GetActiveSpecGroup(): number;
export declare function GetFlyoutInfo(flyoutId: number): any[];
export declare function GetFlyoutSlotInfo(flyoutId: number, flyoutIndex: number): any[];
export declare function GetSpellBookItemInfo(index: number | string, bookType?: string): any[];
export declare function GetSpellCount(index: number | string, bookType?: string): number;
export declare function GetSpellLink(index: number | string, bookType?: string): string;
export declare function GetSpellTabInfo(tab: number): any[];
export declare function GetTalentInfo(i: number, j: number, activeTalentGroup: number): [number, string, string, number, number, number, number, number, number, number, number];
export declare function HasPetSpells(): [number, string];
export declare function IsHarmfulSpell(index: number | string, bookType?: string): void;
export declare function IsHelpfulSpell(index: number | string, bookType?: string): void;
export declare function IsSpellInRange(index: number | string, bookType?: string, unitId?: string): number;
export declare function IsUsableSpell(index: number | string, bookType?: string): [boolean, boolean];
export declare function GetNumShapeshiftForms(): number;
export declare function GetShapeshiftForm(): number;
export declare function GetShapeshiftFormInfo(index: number): any[];
export declare function GetTotemInfo(slot: number): any[];
export declare function IsLoggedIn(): boolean;
export declare const UIParent: UIFrame;
export declare const GameTooltip: UIGameTooltip;
export declare const MAX_COMBO_POINTS = 5;
export declare const UNKNOWN = -1;
export declare const DEFAULT_CHAT_FRAME: UIMessageFrame;
export declare const SCHOOL_MASK_NONE = 0;
export declare const SCHOOL_MASK_ARCANE = 1;
export declare const SCHOOL_MASK_FIRE = 2;
export declare const SCHOOL_MASK_FROST = 4;
export declare const SCHOOL_MASK_HOLY = 8;
export declare const SCHOOL_MASK_NATURE = 16;
export declare const SCHOOL_MASK_SHADOW = 32;
export declare const SCHOOL_MASK_PHYSICAL = 64;
export declare const INVSLOT_AMMO = 1;
export declare const INVSLOT_BACK = 2;
export declare const INVSLOT_BODY = 3;
export declare const INVSLOT_CHEST = 4;
export declare const INVSLOT_FEET = 5;
export declare const INVSLOT_FINGER1 = 6;
export declare const INVSLOT_FINGER2 = 7;
export declare const INVSLOT_FIRST_EQUIPPED = 8;
export declare const INVSLOT_HAND = 9;
export declare const INVSLOT_HEAD = 10;
export declare const INVSLOT_LAST_EQUIPPED = 11;
export declare const INVSLOT_LEGS = 12;
export declare const INVSLOT_MAINHAND = 13;
export declare const INVSLOT_NECK = 14;
export declare const INVSLOT_OFFHAND = 15;
export declare const INVSLOT_RANGED = 16;
export declare const INVSLOT_SHOULDER = 17;
export declare const INVSLOT_TABARD = 18;
export declare const INVSLOT_TRINKET1 = 19;
export declare const INVSLOT_TRINKET2 = 20;
export declare const INVSLOT_WAIST = 21;
export declare const INVSLOT_WRIST = 22;
export declare const SPELL_POWER_MANA = 0;
export declare const SPELL_POWER_RAGE = 1;
export declare const SPELL_POWER_FOCUS = 2;
export declare const SPELL_POWER_ENERGY = 3;
export declare const SPELL_POWER_COMBO_POINTS = 4;
export declare const SPELL_POWER_RUNES = 5;
export declare const SPELL_POWER_RUNIC_POWER = 6;
export declare const SPELL_POWER_SOUL_SHARDS = 7;
export declare const SPELL_POWER_LUNAR_POWER = 8;
export declare const SPELL_POWER_HOLY_POWER = 9;
export declare const SPELL_POWER_ALTERNATE_POWER = 10;
export declare const SPELL_POWER_MAELSTROM = 11;
export declare const SPELL_POWER_CHI = 12;
export declare const SPELL_POWER_INSANITY = 13;
export declare const SPELL_POWER_ARCANE_CHARGES = 16;
export declare const SPELL_POWER_FURY = 17;
export declare const SPELL_POWER_PAIN = 18;
export declare const CHI_COST = "";
export declare const COMBO_POINTS_COST = "";
export declare const ENERGY_COST = "";
export declare const FOCUS_COST = "";
export declare const HOLY_POWER_COST = "";
export declare const MANA_COST = "";
export declare const RAGE_COST = "";
export declare const RUNIC_POWER_COST = "";
export declare const SOUL_SHARDS_COST = "";
export declare const LUNAR_POWER_COST = "";
export declare const INSANITY_COST = "";
export declare const MAELSTROM_COST = "";
export declare const ARCANE_CHARGES_COST = "";
export declare const PAIN_COST = "";
export declare const FURY_COST = "";
export declare const CR_CRIT_MELEE = 1;
export declare const CR_HASTE_MELEE = 2;
export declare const CR_VERSATILITY_DAMAGE_DONE = 3;
export declare const ITEM_LEVEL = "ITEM_LEVEL";
export declare const LE_PARTY_CATEGORY_INSTANCE = 1;
export declare const LE_PARTY_CATEGORY_HOME = 2;
export declare const _G: any;
export declare const BOOKTYPE_SPELL = "spell";
export declare const BOOKTYPE_PET = "pet";
export declare const MAX_TALENT_TIERS = 7;
export declare const NUM_TALENT_COLUMNS = 3;
export declare const RUNE_NAME: {};
export declare const RAID_CLASS_COLORS: LuaObj<{
    r: number;
    g: number;
    b: number;
    colorStr: string;
}>;
export declare const AIR_TOTEM_SLOT = 1;
export declare const EARTH_TOTEM_SLOT = 2;
export declare const FIRE_TOTEM_SLOT = 3;
export declare const WATER_TOTEM_SLOT = 4;
export declare const MAX_TOTEMS = 3;
export declare const COMBATLOG_OBJECT_AFFILIATION_MINE = 1;
export declare const COMBATLOG_OBJECT_AFFILIATION_PARTY = 2;
export declare const COMBATLOG_OBJECT_AFFILIATION_RAID = 3;
export declare const COMBATLOG_OBJECT_REACTION_FRIENDLY = 4;
export declare const Enum: {
    PowerType: {
        Mana: number;
        Rage: number;
        Focus: number;
        Energy: number;
        ComboPoints: number;
        Runes: number;
        RunicPower: number;
        SoulShards: number;
        LunarPower: number;
        HolyPower: number;
        Alternate: number;
        Maelstrom: number;
        Chi: number;
        Insanity: number;
        Obsolete: number;
        Obsolete2: number;
        ArcaneCharges: number;
        Fury: number;
        Pain: number;
    };
};
export interface ItemLocationMixin {
    Clear(): void;
    SetBagAndSlot(bagID: number, slotIndex: number): void;
    GetBagAndSlot(): [number | null, number | null];
    SetEquipmentSlot(equipmentSlotIndex: number): void;
    GetEquipmentSlot(): number | null;
    IsEquipmentSlot(): boolean;
    IsBagAndSlot(): boolean;
    HasAnyLocation(): boolean;
    IsEqualToBagAndSlot(otherBagID: number, otherSlotIndex: number): boolean;
    IsEqualToEquipmentSlot(otherEquipmentSlotIndex: number): boolean;
    IsEqualTo(otherItemLocation: ItemLocationMixin): boolean;
}
export declare class FakeItemLocation {
    CreateFromEquipmentSlot(equipmentSlotIndex: number): ItemLocationMixin;
}
export declare const ItemLocation: FakeItemLocation;
export declare const C_Item: {
    DoesItemExist: (emptiableItemLocation: ItemLocationMixin) => boolean;
};
export interface AzeritePowerInfo {
    spellID: number;
    azeritePowerId: number;
}
export declare const C_AzeriteEmpoweredItem: {
    IsAzeriteEmpoweredItem: (itemLocation: ItemLocationMixin) => boolean;
    GetAllTierInfo: (azeriteEmpoweredItemLocation: ItemLocationMixin) => any[];
    IsPowerSelected: (azeriteEmpoweredItemLocation: ItemLocationMixin, powerID: number) => boolean;
    GetPowerInfo: (powerId: number) => AzeritePowerInfo;
};
