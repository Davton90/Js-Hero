/**
 * items.js — Mobile Legends: Bang Bang Item Database
 * Source: Liquipedia MLBB / Fandom Wiki / Patch 2.x
 *
 * STRUCTURE PER ITEM:
 *   id                : string key (snake_case)
 *   name              : display name
 *   tier              : 1 | 2 | 3
 *   category          : "Attack" | "Magic" | "Defense" | "Movement" | "Jungling"
 *   cost              : gold cost
 *   sellValue         : sell price
 *   recipe            : array of item IDs that build into this item (empty = tier 1 / boots)
 *   attributes        : flat stats (stackable between items)
 *   uniqueAttributes  : unique stats (NOT stackable — only 1 instance per stat counts)
 *   passives          : array of passive/active effects
 *     .name           : ability name
 *     .description    : effect text
 *     .cooldown       : cooldown in seconds (0 = always active / proc)
 *     .isCalculable   : true = numeric & included in stat math, false = display-only
 *
 * STAT KEYS USED:
 *   physicalAttack, magicPower, hp, mana, physicalDefense, magicDefense,
 *   attackSpeed (%), critChance (%), critDamage (%), lifesteal (%),
 *   hybridLifesteal (%), spellVamp (%), physicalPenetration (flat),
 *   physicalPenetration_pct (%), magicPenetration (flat), magicPenetration_pct (%),
 *   cooldownReduction (%), movementSpeed (flat), hpRegen, manaRegen, ccReduction (%)
 */

const MLBB_ITEMS = {

  // ═══════════════════════════════════════════════════════
  //  ATTACK ITEMS
  // ═══════════════════════════════════════════════════════

  // ── Tier 1 ─────────────────────────────────────────────
  "dagger": {
    id: "dagger", name: "Dagger",
    tier: 1, category: "Attack",
    cost: 250, sellValue: 150,
    recipe: [],
    attributes: { physicalAttack: 15 },
    uniqueAttributes: {},
    passives: []
  },

  "short_sword": {
    id: "short_sword", name: "Short Sword",
    tier: 1, category: "Attack",
    cost: 150, sellValue: 90,
    recipe: [],
    attributes: { physicalAttack: 12 },
    uniqueAttributes: {},
    passives: []
  },

  "wooden_bow": {
    id: "wooden_bow", name: "Wooden Bow",
    tier: 1, category: "Attack",
    cost: 250, sellValue: 150,
    recipe: [],
    attributes: { attackSpeed: 15 },
    uniqueAttributes: {},
    passives: []
  },

  // ── Tier 2 ─────────────────────────────────────────────
  "fury_hammer": {
    id: "fury_hammer", name: "Fury Hammer",
    tier: 2, category: "Attack",
    cost: 830, sellValue: 498,
    recipe: ["dagger", "short_sword"],
    attributes: { physicalAttack: 35 },
    uniqueAttributes: { physicalPenetration: 12 },
    passives: []
  },

  "magic_blade": {
    id: "magic_blade", name: "Magic Blade",
    tier: 2, category: "Attack",
    cost: 1060, sellValue: 636,
    recipe: ["dagger", "short_sword"],
    attributes: { physicalAttack: 22, lifesteal: 6 },
    uniqueAttributes: {},
    passives: [
      {
        name: "Lifeline",
        description: "When taking damage that reduces HP below 30%, gains a shield (scales with level) and 50% Movement Speed that decays over 3s.",
        cooldown: 60,
        isCalculable: false
      }
    ]
  },

  "war_hammer": {
    id: "war_hammer", name: "War Hammer",
    tier: 2, category: "Attack",
    cost: 700, sellValue: 420,
    recipe: ["short_sword"],
    attributes: { physicalAttack: 25, hp: 200 },
    uniqueAttributes: {},
    passives: []
  },

  "scarlet_bow": {
    id: "scarlet_bow", name: "Scarlet Bow",
    tier: 2, category: "Attack",
    cost: 980, sellValue: 588,
    recipe: ["wooden_bow"],
    attributes: { physicalAttack: 20, attackSpeed: 20, critChance: 10 },
    uniqueAttributes: {},
    passives: []
  },

  // ── Tier 3 ─────────────────────────────────────────────
  "hunter_strike": {
    id: "hunter_strike", name: "Hunter Strike",
    tier: 3, category: "Attack",
    cost: 2010, sellValue: 1206,
    recipe: ["fury_hammer", "dagger"],
    attributes: { physicalAttack: 80, cooldownReduction: 10 },
    uniqueAttributes: { physicalPenetration: 15 },
    passives: [
      {
        name: "Retribution",
        description: "Dealing damage to an enemy hero or Creep 5 times in a row grants 50% extra Movement Speed that decays rapidly over 3s.",
        cooldown: 8,
        isCalculable: false
      }
    ]
  },

  "malefic_roar": {
    id: "malefic_roar", name: "Malefic Roar",
    tier: 3, category: "Attack",
    cost: 2060, sellValue: 1236,
    recipe: ["fury_hammer"],
    attributes: { physicalAttack: 60 },
    uniqueAttributes: { physicalPenetration_pct: 35 },
    passives: [
      {
        name: "Armor Buster",
        description: "Physical Penetration increases by 0.05% per point of enemy Physical Defense, up to 20%.",
        cooldown: 0,
        isCalculable: false
      }
    ]
  },

  "blade_of_despair": {
    id: "blade_of_despair", name: "Blade of Despair",
    tier: 3, category: "Attack",
    cost: 3010, sellValue: 1806,
    recipe: ["war_hammer", "short_sword"],
    attributes: { physicalAttack: 160 },
    uniqueAttributes: {},
    passives: [
      {
        name: "Despair",
        description: "Attacking enemies in an abnormal state (CC'd, slowed, etc.) increases Physical Attack by 25% for 2s.",
        cooldown: 0,
        isCalculable: false
      }
    ]
  },

  "berserk_fury": {
    id: "berserk_fury", name: "Berserker's Fury",
    tier: 3, category: "Attack",
    cost: 2350, sellValue: 1410,
    recipe: ["scarlet_bow"],
    attributes: { physicalAttack: 65, critChance: 25 },
    uniqueAttributes: { critDamage: 40 },
    passives: [
      {
        name: "Doom",
        description: "Critical strikes increase Physical Attack by 5% for 2s.",
        cooldown: 0,
        isCalculable: false
      }
    ]
  },

  "scarlet_phantom": {
    id: "scarlet_phantom", name: "Scarlet Phantom",
    tier: 3, category: "Attack",
    cost: 2020, sellValue: 1212,
    recipe: ["scarlet_bow", "wooden_bow"],
    attributes: { physicalAttack: 30, attackSpeed: 40, critChance: 25 },
    uniqueAttributes: {},
    passives: [
      {
        name: "Frenzy",
        description: "Critical strikes increase Attack Speed by 30% and Crit Chance by 5% for 2s.",
        cooldown: 0,
        isCalculable: false
      }
    ]
  },

  "windtalker": {
    id: "windtalker", name: "Windtalker",
    tier: 3, category: "Attack",
    cost: 1870, sellValue: 1122,
    recipe: ["wooden_bow", "scarlet_bow"],
    attributes: { attackSpeed: 40, movementSpeed: 20, critChance: 10 },
    uniqueAttributes: {},
    passives: [
      {
        name: "Typhoon",
        description: "Every 5 Basic Attacks, the next attack deals extra Magic Damage (100 + 80% Magic Power) to up to 3 enemies.",
        cooldown: 0,
        isCalculable: false
      }
    ]
  },

  "endless_battle": {
    id: "endless_battle", name: "Endless Battle",
    tier: 3, category: "Attack",
    cost: 3010, sellValue: 1806,
    recipe: ["war_hammer", "fury_hammer"],
    attributes: {
      physicalAttack: 65, hp: 250,
      cooldownReduction: 10, movementSpeed: 5,
      hybridLifesteal: 15, manaRegen: 10
    },
    uniqueAttributes: {},
    passives: [
      {
        name: "Divine Justice",
        description: "Within 3s of using a skill, the next Basic Attack deals extra True Damage equal to 85% of Physical Attack.",
        cooldown: 1.5,
        isCalculable: false
      }
    ]
  },

  "demon_hunter_sword": {
    id: "demon_hunter_sword", name: "Demon Hunter Sword",
    tier: 3, category: "Attack",
    cost: 2180, sellValue: 1308,
    recipe: ["wooden_bow", "dagger"],
    attributes: { physicalAttack: 35, attackSpeed: 25, lifesteal: 10 },
    uniqueAttributes: {},
    passives: [
      {
        name: "Devour",
        description: "Basic Attacks deal extra Physical Damage equal to 9% of target's current HP. Each hit grants 3% extra Lifesteal for 3s, up to 5 stacks.",
        cooldown: 0,
        isCalculable: false
      }
    ]
  },

  "golden_staff": {
    id: "golden_staff", name: "Golden Staff",
    tier: 3, category: "Attack",
    cost: 2100, sellValue: 1260,
    recipe: ["wooden_bow", "scarlet_bow"],
    attributes: { physicalAttack: 65, attackSpeed: 30 },
    uniqueAttributes: {},
    passives: [
      {
        name: "Swift",
        description: "Each 1% Crit Chance is converted into 1% extra Attack Speed (Crit Chance cannot exceed 0%).",
        cooldown: 0,
        isCalculable: false
      },
      {
        name: "Endless Strike",
        description: "Every 3rd Basic Attack (or after 2 non-crit hits) triggers twice with greatly increased Attack Speed.",
        cooldown: 0,
        isCalculable: false
      }
    ]
  },

  "corrosion_scythe": {
    id: "corrosion_scythe", name: "Corrosion Scythe",
    tier: 3, category: "Attack",
    cost: 2050, sellValue: 1230,
    recipe: ["wooden_bow", "dagger"],
    attributes: { physicalAttack: 50, attackSpeed: 25, movementSpeed: 5 },
    uniqueAttributes: {},
    passives: [
      {
        name: "Corrosion",
        description: "Basic Attacks reduce target's Movement Speed by 8% per stack (halved for ranged), up to 5 stacks for 1.5s.",
        cooldown: 0,
        isCalculable: false
      }
    ]
  },

  "sea_halberd": {
    id: "sea_halberd", name: "Sea Halberd",
    tier: 3, category: "Attack",
    cost: 1950, sellValue: 1170,
    recipe: ["dagger", "wooden_bow"],
    attributes: { physicalAttack: 80, attackSpeed: 25 },
    uniqueAttributes: {},
    passives: [
      {
        name: "Life Drain",
        description: "Basic Attacks reduce enemy healing and shield effects by 50% for 3s.",
        cooldown: 0,
        isCalculable: false
      }
    ]
  },

  "war_axe": {
    id: "war_axe", name: "War Axe",
    tier: 3, category: "Attack",
    cost: 1930, sellValue: 1158,
    recipe: ["war_hammer", "fury_hammer"],
    attributes: { physicalAttack: 55, hp: 550, cooldownReduction: 10 },
    uniqueAttributes: {},
    passives: [
      {
        name: "Fighting Spirit",
        description: "Dealing damage grants 12 extra Physical Attack and 2% Spell Vamp per second for 4s, up to 6 stacks. At full stacks, deal extra True Damage equal to 10% Base Damage.",
        cooldown: 0,
        isCalculable: false
      }
    ]
  },

  "blade_of_heptaseas": {
    id: "blade_of_heptaseas", name: "Blade of the Heptaseas",
    tier: 3, category: "Attack",
    cost: 2100, sellValue: 1260,
    recipe: ["fury_hammer", "short_sword"],
    attributes: { physicalAttack: 70, hp: 250, lifesteal: 15 },
    uniqueAttributes: {},
    passives: [
      {
        name: "Ambush",
        description: "If no damage taken or dealt within 5s, the next Basic Attack deals extra Physical Damage equal to +80 Physical Attack.",
        cooldown: 0,
        isCalculable: false
      }
    ]
  },

  "rose_gold_meteor": {
    id: "rose_gold_meteor", name: "Rose Gold Meteor",
    tier: 3, category: "Attack",
    cost: 2120, sellValue: 1272,
    recipe: ["magic_blade", "dagger"],
    attributes: { physicalAttack: 40, attackSpeed: 20, lifesteal: 10 },
    uniqueAttributes: {},
    passives: [
      {
        name: "Lifeline",
        description: "When HP drops below 30%, gains a shield (scales with level) and 50% Movement Speed that decays over 3s.",
        cooldown: 60,
        isCalculable: false
      }
    ]
  },

  "wind_of_nature": {
    id: "wind_of_nature", name: "Wind of Nature",
    tier: 3, category: "Attack",
    cost: 1910, sellValue: 1146,
    recipe: ["magic_blade", "wooden_bow"],
    attributes: { physicalAttack: 30, attackSpeed: 20, lifesteal: 10 },
    uniqueAttributes: {},
    passives: [],
    actives: [
      {
        name: "Wind Chant",
        description: "Makes hero immune to all Physical Damage for 2s (halved for non-Marksman heroes).",
        cooldown: 80,
        isCalculable: false
      }
    ]
  },

  "haas_claws": {
    id: "haas_claws", name: "Haas' Claws",
    tier: 3, category: "Attack",
    cost: 1810, sellValue: 1086,
    recipe: ["scarlet_bow", "dagger"],
    attributes: { physicalAttack: 70, attackSpeed: 20, critChance: 20 },
    uniqueAttributes: { lifesteal: 20 },
    passives: [
      {
        name: "Insanity",
        description: "When HP falls below 40%, gains 10% extra Lifesteal and 20% Attack Speed for 5s.",
        cooldown: 0,
        isCalculable: false
      }
    ]
  },

  "malefic_gun": {
    id: "malefic_gun", name: "Malefic Gun",
    tier: 3, category: "Attack",
    cost: 2100, sellValue: 1260,
    recipe: ["fury_hammer", "wooden_bow"],
    attributes: { physicalAttack: 65, attackSpeed: 30, movementSpeed: 5 },
    uniqueAttributes: { physicalPenetration_pct: 30 },
    passives: [
      {
        name: "Scope",
        description: "Increases Basic Attack range by 0.8 units and grants 10% extra Movement Speed for 0.5s on hit.",
        cooldown: 0,
        isCalculable: false
      }
    ]
  },

  "great_dragon_spear": {
    id: "great_dragon_spear", name: "Great Dragon Spear",
    tier: 3, category: "Attack",
    cost: 2250, sellValue: 1350,
    recipe: ["fury_hammer", "scarlet_bow"],
    attributes: { physicalAttack: 65, critChance: 20, cooldownReduction: 10 },
    uniqueAttributes: {},
    passives: [
      {
        name: "Dragon Scale",
        description: "Casting Ultimate grants 30% extra Movement Speed for 7.5s.",
        cooldown: 0,
        isCalculable: false
      }
    ]
  },

  "sky_piercer": {
    id: "sky_piercer", name: "Sky Piercer",
    tier: 3, category: "Attack",
    cost: 2470, sellValue: 1482,
    recipe: ["fury_hammer", "war_hammer"],
    attributes: { physicalAttack: 100, hp: 300 },
    uniqueAttributes: {},
    passives: [
      {
        name: "Execute",
        description: "Basic Attacks against enemies with HP below 30% deal extra True Damage equal to 30% of lost HP.",
        cooldown: 0,
        isCalculable: false
      }
    ]
  },

  // ═══════════════════════════════════════════════════════
  //  MAGIC ITEMS
  // ═══════════════════════════════════════════════════════

  // ── Tier 1 ─────────────────────────────────────────────
  "power_crystal": {
    id: "power_crystal", name: "Power Crystal",
    tier: 1, category: "Magic",
    cost: 240, sellValue: 144,
    recipe: [],
    attributes: { magicPower: 30 },
    uniqueAttributes: {},
    passives: []
  },

  "mana_necklace": {
    id: "mana_necklace", name: "Mana Necklace",
    tier: 1, category: "Magic",
    cost: 160, sellValue: 96,
    recipe: [],
    attributes: { mana: 250, manaRegen: 8 },
    uniqueAttributes: {},
    passives: []
  },

  // ── Tier 2 ─────────────────────────────────────────────
  "mystery_codex": {
    id: "mystery_codex", name: "Mystery Codex",
    tier: 2, category: "Magic",
    cost: 970, sellValue: 582,
    recipe: ["power_crystal"],
    attributes: { magicPower: 50, cooldownReduction: 5 },
    uniqueAttributes: {},
    passives: []
  },

  "arcane_blade": {
    id: "arcane_blade", name: "Arcane Blade",
    tier: 2, category: "Magic",
    cost: 920, sellValue: 552,
    recipe: ["power_crystal"],
    attributes: { magicPower: 40 },
    uniqueAttributes: { magicPenetration: 10 },
    passives: []
  },

  "magic_orb": {
    id: "magic_orb", name: "Magic Orb",
    tier: 2, category: "Magic",
    cost: 880, sellValue: 528,
    recipe: ["power_crystal", "mana_necklace"],
    attributes: { magicPower: 45, mana: 250 },
    uniqueAttributes: {},
    passives: []
  },

  // ── Tier 3 ─────────────────────────────────────────────
  "holy_crystal": {
    id: "holy_crystal", name: "Holy Crystal",
    tier: 3, category: "Magic",
    cost: 2180, sellValue: 1308,
    recipe: ["mystery_codex", "power_crystal"],
    attributes: { magicPower: 100 },
    uniqueAttributes: {},
    passives: [
      {
        name: "Mystery",
        description: "Increases Magic Power by 21–35% (scales with level).",
        cooldown: 0,
        isCalculable: false
      }
    ]
  },

  "divine_glaive": {
    id: "divine_glaive", name: "Divine Glaive",
    tier: 3, category: "Magic",
    cost: 1970, sellValue: 1182,
    recipe: ["arcane_blade"],
    attributes: { magicPower: 65 },
    uniqueAttributes: { magicPenetration_pct: 35 },
    passives: [
      {
        name: "Spellbreaker",
        description: "Magic Penetration increases by 0.1% per point of enemy Magic Defense, up to 20%.",
        cooldown: 0,
        isCalculable: false
      }
    ]
  },

  "lightning_truncheon": {
    id: "lightning_truncheon", name: "Lightning Truncheon",
    tier: 3, category: "Magic",
    cost: 2100, sellValue: 1260,
    recipe: ["mystery_codex"],
    attributes: { magicPower: 75, mana: 300, cooldownReduction: 10 },
    uniqueAttributes: {},
    passives: [
      {
        name: "Resonate",
        description: "Every 6s, the next skill bounces to 3 enemies dealing Magic Damage (200% Magic Power + Mana scaling).",
        cooldown: 6,
        isCalculable: false
      }
    ]
  },

  "clock_of_destiny": {
    id: "clock_of_destiny", name: "Clock of Destiny",
    tier: 3, category: "Magic",
    cost: 1950, sellValue: 1170,
    recipe: ["mystery_codex", "mana_necklace"],
    attributes: { magicPower: 60, hp: 615, mana: 600 },
    uniqueAttributes: {},
    passives: [
      {
        name: "Time",
        description: "Every 30s, gains +25 Magic Power and +300 Max Mana (up to 12 stacks). At full stacks, gains +5% Magic Attack.",
        cooldown: 0,
        isCalculable: false
      }
    ]
  },

  "glowing_wand": {
    id: "glowing_wand", name: "Glowing Wand",
    tier: 3, category: "Magic",
    cost: 2100, sellValue: 1260,
    recipe: ["power_crystal"],
    attributes: { magicPower: 75, hp: 400, movementSpeed: 5 },
    uniqueAttributes: {},
    passives: [
      {
        name: "Scorch",
        description: "Skill hits burn the target for 2–4% of current HP as Magic Damage over 3s.",
        cooldown: 0,
        isCalculable: false
      }
    ]
  },

  "necklace_of_durance": {
    id: "necklace_of_durance", name: "Necklace of Durance",
    tier: 3, category: "Magic",
    cost: 1960, sellValue: 1176,
    recipe: ["arcane_blade"],
    attributes: { magicPower: 60, movementSpeed: 5, cooldownReduction: 10 },
    uniqueAttributes: {},
    passives: [
      {
        name: "Life Drain",
        description: "Skill hits reduce enemy healing and shield by 50% for 3s.",
        cooldown: 0,
        isCalculable: false
      }
    ]
  },

  "ice_queen_wand": {
    id: "ice_queen_wand", name: "Ice Queen Wand",
    tier: 3, category: "Magic",
    cost: 2110, sellValue: 1266,
    recipe: ["power_crystal", "magic_orb"],
    attributes: { magicPower: 75, mana: 300, movementSpeed: 7 },
    uniqueAttributes: {},
    passives: [
      {
        name: "Ice Bound",
        description: "Skill damage slows targets by 15% for 3s, stacking up to 2 times.",
        cooldown: 0,
        isCalculable: false
      }
    ]
  },

  "concentrated_energy": {
    id: "concentrated_energy", name: "Concentrated Energy",
    tier: 3, category: "Magic",
    cost: 2150, sellValue: 1290,
    recipe: ["mystery_codex"],
    attributes: { magicPower: 70, hp: 700 },
    uniqueAttributes: { hybridLifesteal: 25 },
    passives: [
      {
        name: "Recharge",
        description: "Killing a unit restores 10% HP.",
        cooldown: 0,
        isCalculable: false
      }
    ]
  },

  "genius_wand": {
    id: "genius_wand", name: "Genius Wand",
    tier: 3, category: "Magic",
    cost: 1980, sellValue: 1188,
    recipe: ["arcane_blade"],
    attributes: { magicPower: 75, movementSpeed: 5 },
    uniqueAttributes: {},
    passives: [
      {
        name: "Magic",
        description: "Dealing skill damage reduces enemy Magic Defense by 3–7 for 2s, up to 3 stacks.",
        cooldown: 0,
        isCalculable: false
      }
    ]
  },

  "calamity_reaper": {
    id: "calamity_reaper", name: "Calamity Reaper",
    tier: 3, category: "Magic",
    cost: 1950, sellValue: 1170,
    recipe: ["mystery_codex"],
    attributes: { magicPower: 70, mana: 300, cooldownReduction: 6, manaRegen: 4 },
    uniqueAttributes: {},
    passives: [
      {
        name: "Calamity",
        description: "After using a skill, the next Basic Attack deals extra True Damage equal to 120% Magic Power and restores Mana.",
        cooldown: 1.5,
        isCalculable: false
      }
    ]
  },

  "enchanted_talisman": {
    id: "enchanted_talisman", name: "Enchanted Talisman",
    tier: 3, category: "Magic",
    cost: 2050, sellValue: 1230,
    recipe: ["mystery_codex", "mana_necklace"],
    attributes: { magicPower: 50, hp: 450, mana: 750, cooldownReduction: 20 },
    uniqueAttributes: { maxCooldownReduction: 45 }, // raises CDR cap to 45%
    passives: [
      {
        name: "Mana Spring",
        description: "Restores 15% Max Mana every 10s.",
        cooldown: 0,
        isCalculable: false
      }
    ]
  },

  "wishing_lantern": {
    id: "wishing_lantern", name: "Wishing Lantern",
    tier: 3, category: "Magic",
    cost: 2150, sellValue: 1290,
    recipe: ["mystery_codex", "mana_necklace"],
    attributes: { magicPower: 75, mana: 500, cooldownReduction: 15 },
    uniqueAttributes: {},
    passives: [
      {
        name: "Wish",
        description: "Every 10s, heals self for 8% Max HP.",
        cooldown: 0,
        isCalculable: false
      }
    ]
  },

  // ═══════════════════════════════════════════════════════
  //  DEFENSE ITEMS
  // ═══════════════════════════════════════════════════════

  // ── Tier 1 ─────────────────────────────────────────────
  "leather_padding": {
    id: "leather_padding", name: "Leather Padding",
    tier: 1, category: "Defense",
    cost: 160, sellValue: 96,
    recipe: [],
    attributes: { physicalDefense: 18 },
    uniqueAttributes: {},
    passives: []
  },

  "magic_resistance_cloak": {
    id: "magic_resistance_cloak", name: "Magic Resistance Cloak",
    tier: 1, category: "Defense",
    cost: 160, sellValue: 96,
    recipe: [],
    attributes: { magicDefense: 18 },
    uniqueAttributes: {},
    passives: []
  },

  "vitality_gem": {
    id: "vitality_gem", name: "Vitality Gem",
    tier: 1, category: "Defense",
    cost: 240, sellValue: 144,
    recipe: [],
    attributes: { hp: 420 },
    uniqueAttributes: {},
    passives: []
  },

  // ── Tier 2 ─────────────────────────────────────────────
  "chain_vest": {
    id: "chain_vest", name: "Chain Vest",
    tier: 2, category: "Defense",
    cost: 580, sellValue: 348,
    recipe: ["leather_padding"],
    attributes: { physicalDefense: 35 },
    uniqueAttributes: {},
    passives: []
  },

  "magic_barrier": {
    id: "magic_barrier", name: "Magic Barrier",
    tier: 2, category: "Defense",
    cost: 580, sellValue: 348,
    recipe: ["magic_resistance_cloak"],
    attributes: { magicDefense: 35 },
    uniqueAttributes: {},
    passives: []
  },

  "health_pot": {
    id: "health_pot", name: "Health Potion (Ring)",
    tier: 2, category: "Defense",
    cost: 500, sellValue: 300,
    recipe: ["vitality_gem"],
    attributes: { hp: 650, hpRegen: 16 },
    uniqueAttributes: {},
    passives: []
  },

  // ── Tier 3 ─────────────────────────────────────────────
  "dominance_ice": {
    id: "dominance_ice", name: "Dominance Ice",
    tier: 3, category: "Defense",
    cost: 2010, sellValue: 1206,
    recipe: ["chain_vest"],
    attributes: { physicalDefense: 70, mana: 500, cooldownReduction: 10 },
    uniqueAttributes: {},
    passives: [
      {
        name: "Arctic Cold",
        description: "Reduces nearby enemy heroes' Attack Speed by 30% and Movement Speed by 10%.",
        cooldown: 0,
        isCalculable: false
      }
    ]
  },

  "antique_cuirass": {
    id: "antique_cuirass", name: "Antique Cuirass",
    tier: 3, category: "Defense",
    cost: 1900, sellValue: 1140,
    recipe: ["chain_vest", "vitality_gem"],
    attributes: { physicalDefense: 54, hp: 920 },
    uniqueAttributes: {},
    passives: [
      {
        name: "Deter",
        description: "Attacker's Physical Attack is reduced by 10% per stack for 2s, up to 30%.",
        cooldown: 0,
        isCalculable: false
      }
    ]
  },

  "athenas_shield": {
    id: "athenas_shield", name: "Athena's Shield",
    tier: 3, category: "Defense",
    cost: 2050, sellValue: 1230,
    recipe: ["magic_barrier", "vitality_gem"],
    attributes: { hp: 900, magicDefense: 56 },
    uniqueAttributes: {},
    passives: [
      {
        name: "Shield",
        description: "Upon taking Magic Damage, absorbs up to 1150 Magic Damage for 30s cooldown.",
        cooldown: 30,
        isCalculable: false
      }
    ]
  },

  "oracle": {
    id: "oracle", name: "Oracle",
    tier: 3, category: "Defense",
    cost: 2180, sellValue: 1308,
    recipe: ["health_pot", "magic_barrier"],
    attributes: { hp: 850, magicDefense: 36, cooldownReduction: 10 },
    uniqueAttributes: {},
    passives: [
      {
        name: "Bless",
        description: "Increases Shield absorption and HP Regen effects by 25%.",
        cooldown: 0,
        isCalculable: false
      }
    ]
  },

  "blade_armor": {
    id: "blade_armor", name: "Blade Armor",
    tier: 3, category: "Defense",
    cost: 1870, sellValue: 1122,
    recipe: ["chain_vest"],
    attributes: { physicalDefense: 90 },
    uniqueAttributes: {},
    passives: [
      {
        name: "Counterstrike",
        description: "Reflects 25% of Basic Attack Physical Damage back to the attacker, slowing them by 15% for 1s.",
        cooldown: 0,
        isCalculable: false
      }
    ]
  },

  "immortality": {
    id: "immortality", name: "Immortality",
    tier: 3, category: "Defense",
    cost: 2120, sellValue: 1272,
    recipe: ["chain_vest", "magic_barrier"],
    attributes: { physicalDefense: 40, magicDefense: 40, hp: 800 },
    uniqueAttributes: {},
    passives: [
      {
        name: "Immortal",
        description: "Resurrects 2.5s after death with 15% HP and a temporary shield. Cooldown 210s.",
        cooldown: 210,
        isCalculable: false
      }
    ]
  },

  "brute_force_breastplate": {
    id: "brute_force_breastplate", name: "Brute Force Breastplate",
    tier: 3, category: "Defense",
    cost: 1860, sellValue: 1116,
    recipe: ["chain_vest", "vitality_gem"],
    attributes: { physicalDefense: 45, hp: 770 },
    uniqueAttributes: {},
    passives: [
      {
        name: "Brute Force",
        description: "Each second after dealing damage, gains extra Physical/Magic Attack and 2% Movement Speed for 4s, up to 6 stacks.",
        cooldown: 0,
        isCalculable: false
      }
    ]
  },

  "guardian_helmet": {
    id: "guardian_helmet", name: "Guardian Helmet",
    tier: 3, category: "Defense",
    cost: 2200, sellValue: 1320,
    recipe: ["health_pot", "vitality_gem"],
    attributes: { hp: 1550, hpRegen: 50 },
    uniqueAttributes: {},
    passives: [
      {
        name: "Recovery",
        description: "HP Regen increased by 0.25% per kill or assist, up to 2%.",
        cooldown: 0,
        isCalculable: false
      }
    ]
  },

  "radiant_armor": {
    id: "radiant_armor", name: "Radiant Armor",
    tier: 3, category: "Defense",
    cost: 2140, sellValue: 1284,
    recipe: ["magic_barrier", "vitality_gem"],
    attributes: { hp: 950, magicDefense: 52, hpRegen: 12 },
    uniqueAttributes: {},
    passives: [
      {
        name: "Holy Blessing",
        description: "Upon taking Magic Damage, gains 3–8 Magic Defense for 6s, up to 6 stacks.",
        cooldown: 0,
        isCalculable: false
      }
    ]
  },

  "twilight_armor": {
    id: "twilight_armor", name: "Twilight Armor",
    tier: 3, category: "Defense",
    cost: 2100, sellValue: 1260,
    recipe: ["chain_vest", "vitality_gem"],
    attributes: { physicalDefense: 40, hp: 1200, mana: 500 },
    uniqueAttributes: {},
    passives: [
      {
        name: "Defiance",
        description: "When taking over 600 Physical Damage in a single hit, deals True Damage equal to extra Max HP to nearby enemies for 3s.",
        cooldown: 6,
        isCalculable: false
      }
    ]
  },

  // ═══════════════════════════════════════════════════════
  //  MOVEMENT ITEMS (BOOTS)
  //  Note: Boots have no recipe — purchased directly (Tier 2)
  // ═══════════════════════════════════════════════════════

  "warrior_boots": {
    id: "warrior_boots", name: "Warrior Boots",
    tier: 2, category: "Movement",
    cost: 690, sellValue: 138,
    recipe: [],
    attributes: { movementSpeed: 40, physicalDefense: 22 },
    uniqueAttributes: {},
    passives: [
      {
        name: "Valor",
        description: "Gains +5 Physical Defense per Basic Attack received, up to 25 for 3s.",
        cooldown: 0,
        isCalculable: false
      }
    ]
  },

  "tough_boots": {
    id: "tough_boots", name: "Tough Boots",
    tier: 2, category: "Movement",
    cost: 690, sellValue: 138,
    recipe: [],
    attributes: { movementSpeed: 40, magicDefense: 22 },
    uniqueAttributes: { ccReduction: 25 },
    passives: []
  },

  "swift_boots": {
    id: "swift_boots", name: "Swift Boots",
    tier: 2, category: "Movement",
    cost: 690, sellValue: 138,
    recipe: [],
    attributes: { movementSpeed: 40, attackSpeed: 15 },
    uniqueAttributes: {},
    passives: []
  },

  "arcane_boots": {
    id: "arcane_boots", name: "Arcane Boots",
    tier: 2, category: "Movement",
    cost: 710, sellValue: 142,
    recipe: [],
    attributes: { movementSpeed: 40 },
    uniqueAttributes: { magicPenetration: 10 },
    passives: []
  },

  "magic_shoes": {
    id: "magic_shoes", name: "Magic Shoes",
    tier: 2, category: "Movement",
    cost: 710, sellValue: 142,
    recipe: [],
    attributes: { movementSpeed: 40, cooldownReduction: 10 },
    uniqueAttributes: {},
    passives: []
  },

  "physical_boots": {
    id: "physical_boots", name: "Physical Boots",
    tier: 2, category: "Movement",
    cost: 690, sellValue: 138,
    recipe: [],
    attributes: { movementSpeed: 40, physicalAttack: 12 },
    uniqueAttributes: {},
    passives: []
  },

  // ═══════════════════════════════════════════════════════
  //  JUNGLING ITEMS
  // ═══════════════════════════════════════════════════════

  // ── Tier 1 ─────────────────────────────────────────────
  "hunters_knife": {
    id: "hunters_knife", name: "Hunter's Knife",
    tier: 1, category: "Jungling",
    cost: 250, sellValue: 50,
    recipe: [],
    attributes: {},
    uniqueAttributes: {},
    passives: [
      {
        name: "Hunter",
        description: "Deals extra damage to Creeps. Restores HP and Mana when killing a Creep. Reduces Jungle Creep damage taken by 40%.",
        cooldown: 0,
        isCalculable: false
      }
    ]
  },

  // ── Tier 2 ─────────────────────────────────────────────
  "beast_killer": {
    id: "beast_killer", name: "Beast Killer",
    tier: 2, category: "Jungling",
    cost: 350, sellValue: 70,
    recipe: ["hunters_knife"],
    attributes: {},
    uniqueAttributes: {},
    passives: [
      {
        name: "Creep Hunter",
        description: "Increases damage to Creeps by 30% and grants +10% Movement Speed in the Jungle.",
        cooldown: 0,
        isCalculable: false
      }
    ]
  },

  // ── Tier 3 ─────────────────────────────────────────────
  "raptor_machete": {
    id: "raptor_machete", name: "Raptor Machete",
    tier: 3, category: "Jungling",
    cost: 1700, sellValue: 1020,
    recipe: ["beast_killer", "dagger"],
    attributes: { physicalAttack: 30, physicalPenetration: 15, movementSpeed: 4 },
    uniqueAttributes: {},
    passives: [
      {
        name: "Damage to Creeps",
        description: "Increases damage and sustain in Jungle.",
        cooldown: 0,
        isCalculable: false
      }
    ]
  },

  "star_shard": {
    id: "star_shard", name: "Star Shard",
    tier: 3, category: "Jungling",
    cost: 1700, sellValue: 1020,
    recipe: ["beast_killer", "power_crystal"],
    attributes: { magicPower: 40, movementSpeed: 4 },
    uniqueAttributes: {},
    passives: [
      {
        name: "Magic Creep",
        description: "Increases magic damage to Creeps and sustain in Jungle.",
        cooldown: 0,
        isCalculable: false
      }
    ]
  },

  "ice_hunting_bow": {
    id: "ice_hunting_bow", name: "Ice Hunting Bow",
    tier: 3, category: "Jungling",
    cost: 1700, sellValue: 1020,
    recipe: ["beast_killer", "wooden_bow"],
    attributes: { attackSpeed: 20, physicalAttack: 20, movementSpeed: 4 },
    uniqueAttributes: {},
    passives: [
      {
        name: "Attack Speed Jungle",
        description: "Increases attack speed and sustain in Jungle.",
        cooldown: 0,
        isCalculable: false
      }
    ]
  },

};

// ═══════════════════════════════════════════════════════
//  HELPER: GAME RULE CONSTANTS
// ═══════════════════════════════════════════════════════
const MLBB_ITEM_RULES = {
  maxItemSlots: 6,
  maxCooldownReduction: 40,       // % cap (45% with Enchanted Talisman)
  maxAttackSpeed: 300,            // 3.00 attacks/s (500% with Inspire)
  uniqueAttributesNoStack: true,  // unique attrs = no stacking between SAME item
  passivesNoStack: true,          // passive abilities don't stack with same item
  sellRefund: {
    first15s: 1.00,               // 100% refund
    after15s_nonBoots: 0.60,
    after15s_boots: 0.20
  }
};

// ═══════════════════════════════════════════════════════
//  HELPER FUNCTIONS
// ═══════════════════════════════════════════════════════

/**
 * Calculate total stats from a list of selected item IDs (max 6 slots).
 * Handles: flat attribute stacking, unique attribute de-duplication.
 * @param {string[]} selectedIds - Array of item IDs (up to 6)
 * @returns {object} Combined stat totals
 */
function calcItemStats(selectedIds) {
  const total = {};
  const uniqueTracker = new Set(); // tracks "itemId_statKey" to prevent duplication

  for (const id of selectedIds) {
    const item = MLBB_ITEMS[id];
    if (!item) continue;

    // ── Flat attributes (always stack) ──
    for (const [stat, val] of Object.entries(item.attributes)) {
      total[stat] = (total[stat] || 0) + val;
    }

    // ── Unique attributes (no stack per item instance) ──
    for (const [stat, val] of Object.entries(item.uniqueAttributes)) {
      const key = `${id}_${stat}`;
      if (!uniqueTracker.has(key)) {
        uniqueTracker.add(key);
        total[stat] = (total[stat] || 0) + val;
      }
    }
  }

  // ── Enforce game caps ──
  if (total.cooldownReduction) {
    total.cooldownReduction = Math.min(
      total.cooldownReduction,
      total.maxCooldownReduction || MLBB_ITEM_RULES.maxCooldownReduction
    );
  }

  return total;
}

/**
 * Get all items by category.
 * @param {string} category - "Attack" | "Magic" | "Defense" | "Movement" | "Jungling"
 * @returns {object[]}
 */
function getItemsByCategory(category) {
  return Object.values(MLBB_ITEMS).filter(i => i.category === category);
}

/**
 * Get all items by tier within a category.
 * @param {string} category
 * @param {number} tier - 1 | 2 | 3
 * @returns {object[]}
 */
function getItemsByTier(category, tier) {
  return Object.values(MLBB_ITEMS).filter(i => i.category === category && i.tier === tier);
}

/**
 * Get the full recipe tree (all components recursively) for an item.
 * @param {string} id - Item ID
 * @returns {string[]} Flat list of all component IDs
 */
function getFullRecipe(id) {
  const item = MLBB_ITEMS[id];
  if (!item || item.recipe.length === 0) return [];
  return item.recipe.flatMap(compId => [compId, ...getFullRecipe(compId)]);
}

// Export for use in other modules
if (typeof module !== "undefined") {
  module.exports = { MLBB_ITEMS, MLBB_ITEM_RULES, calcItemStats, getItemsByCategory, getItemsByTier, getFullRecipe };
}
