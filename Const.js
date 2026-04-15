    const heroDatabase = {
        mage: {
            selena: { name: "Selena", icon: "🕷️",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2280", "3068", "4053", "5038", false],
                        ["Physical ATK", "110", "137", "170", "204", true],
                        ["Physical Defense", "15", "31", "51", "72", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "1.00", "1.06", "1.13", "1.21", false],
                        ["HP Regen", "6.8", "8.0", "9.4", "11.0", false],
                        ["Mana", "500", "900", "1400", "1900", false],
                        ["Mana Regen", "4.0", "4.8", "5.8", "6.8", false],
                        ["Movement SPD", "240", "240", "240", "240", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+197 HP/level", note: "Stabil & Linear" },
                    { stat: "Physical ATK Growth", value: "+6.7 ATK/level", note: "Konsisten" },
                    { stat: "Physical Defense", value: "+4.1/level", note: "Rata-rata" },
                    { stat: "Magic Defense", value: "+2.5/level", note: "Rata-rata" },
                    { stat: "Attack Speed", value: "+0.015/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.3/level", note: "Rata-rata" },
                    { stat: "Mana", value: "+100/level", note: "Tepat +100" },
                    { stat: "Mana Regen", value: "+0.2/level", note: "Tepat +0.2" }
                ],
                conclusion: ["+197 HP", "+6.7 Physical ATK", "+4.1 Physical Defense", "+2.5 Magic Defense", "+0.015 Attack Speed", "+0.3 HP Regen", "+100 Mana", "+0.2 Mana Regen"]
            },
            valentina: { name: "Valentina", icon: "👑",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2500", "3240", "4165", "5090", false],
                        ["Physical ATK", "115", "140", "173", "205", true],
                        ["Physical Defense", "20", "38", "60", "83", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "0.98", "1.02", "1.07", "1.12", false],
                        ["HP Regen", "7.2", "8.4", "9.8", "11.4", false],
                        ["Mana", "500", "900", "1400", "1900", false],
                        ["Mana Regen", "4.0", "4.8", "5.8", "6.8", false],
                        ["Movement SPD", "240", "240", "240", "240", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+185 HP/level", note: "Sangat Stabil" },
                    { stat: "Physical ATK Growth", value: "+6.4 ATK/level", note: "Konsisten" },
                    { stat: "Physical Defense", value: "+4.5/level", note: "Rata-rata" },
                    { stat: "Magic Defense", value: "+2.5/level", note: "Rata-rata" },
                    { stat: "Attack Speed", value: "+0.01/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.3/level", note: "Rata-rata" },
                    { stat: "Mana", value: "+100/level", note: "Tepat +100" },
                    { stat: "Mana Regen", value: "+0.2/level", note: "Tepat +0.2" }
                ],
                conclusion: ["+185 HP", "+6.4 Physical ATK", "+4.5 Physical Defense", "+2.5 Magic Defense", "+0.01 Attack Speed", "+0.3 HP Regen", "+100 Mana", "+0.2 Mana Regen"]
            },
            aurora: { name: "Aurora", icon: "❄️",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2380", "3000", "3775", "4550", false],
                        ["Physical ATK", "110", "143", "184", "225", true],
                        ["Physical Defense", "17", "33", "53", "73", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "1.00", "1.06", "1.13", "1.21", false],
                        ["HP Regen", "6.8", "8.0", "9.4", "11.0", false],
                        ["Mana", "500", "900", "1400", "1900", false],
                        ["Mana Regen", "4.0", "4.8", "5.8", "6.8", false],
                        ["Movement SPD", "250", "250", "250", "250", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+155 HP/level", note: "Stabil & Linear" },
                    { stat: "Physical ATK Growth", value: "+8.2 ATK/level", note: "Sangat Konsisten" },
                    { stat: "Physical Defense", value: "+4.0/level", note: "Rata-rata" },
                    { stat: "Magic Defense", value: "+2.5/level", note: "Rata-rata" },
                    { stat: "Attack Speed", value: "+0.015/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.3/level", note: "Rata-rata" },
                    { stat: "Mana", value: "+100/level", note: "Tepat +100" },
                    { stat: "Mana Regen", value: "+0.2/level", note: "Tepat +0.2" }
                ],
                conclusion: ["+155 HP", "+8.2 Physical ATK", "+4.0 Physical Defense", "+2.5 Magic Defense", "+0.015 Attack Speed", "+0.3 HP Regen", "+100 Mana", "+0.2 Mana Regen"]
            },
            kadita: { name: "Kadita", icon: "🌊",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2440", "3100", "3925", "4750", false],
                        ["Physical ATK", "105", "126", "152", "178", true],
                        ["Physical Defense", "18", "34", "54", "74", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "1.00", "1.06", "1.13", "1.21", false],
                        ["HP Regen", "7.2", "8.4", "10.0", "11.6", false],
                        ["Mana", "500", "900", "1400", "1900", false],
                        ["Mana Regen", "4.0", "4.8", "5.8", "6.8", false],
                        ["Movement SPD", "250", "250", "250", "250", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+165 HP/level", note: "Stabil & Linear" },
                    { stat: "Physical ATK Growth", value: "+5.2 ATK/level", note: "Konsisten" },
                    { stat: "Physical Defense", value: "+4.0/level", note: "Tepat +4.0" },
                    { stat: "Magic Defense", value: "+2.5/level", note: "Rata-rata" },
                    { stat: "Attack Speed", value: "+0.015/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.3/level", note: "Rata-rata" },
                    { stat: "Mana", value: "+100/level", note: "Tepat +100" },
                    { stat: "Mana Regen", value: "+0.2/level", note: "Tepat +0.2" }
                ],
                conclusion: ["+165 HP", "+5.2 Physical ATK", "+4.0 Physical Defense", "+2.5 Magic Defense", "+0.015 Attack Speed", "+0.3 HP Regen", "+100 Mana", "+0.2 Mana Regen"]
            },
            valir: { name: "Valir", icon: "🔥",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2380", "3000", "3775", "4550", false],
                        ["Physical ATK", "105", "124", "147", "171", true],
                        ["Physical Defense", "17", "33", "53", "73", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "1.00", "1.04", "1.09", "1.14", false],
                        ["HP Regen", "6.8", "8.0", "9.4", "11.0", false],
                        ["Mana", "500", "900", "1400", "1900", false],
                        ["Mana Regen", "4.0", "4.8", "5.8", "6.8", false],
                        ["Movement SPD", "250", "250", "250", "250", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+155 HP/level", note: "Stabil & Linear" },
                    { stat: "Physical ATK Growth", value: "+4.7 ATK/level", note: "Konsisten" },
                    { stat: "Physical Defense", value: "+4.0/level", note: "Tepat +4.0" },
                    { stat: "Magic Defense", value: "+2.5/level", note: "Rata-rata" },
                    { stat: "Attack Speed", value: "+0.01/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.3/level", note: "Rata-rata" },
                    { stat: "Mana", value: "+100/level", note: "Tepat +100" },
                    { stat: "Mana Regen", value: "+0.2/level", note: "Tepat +0.2" }
                ],
                conclusion: ["+155 HP", "+4.7 Physical ATK", "+4.0 Physical Defense", "+2.5 Magic Defense", "+0.01 Attack Speed", "+0.3 HP Regen", "+100 Mana", "+0.2 Mana Regen"]
            },
            change: { name: "Chang'e", icon: "🌙",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2320", "2900", "3625", "4350", false],
                        ["Physical ATK", "115", "145", "183", "222", true],
                        ["Physical Defense", "17", "33", "53", "73", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "1.01", "1.05", "1.10", "1.15", false],
                        ["HP Regen", "6.8", "8.0", "9.4", "11.0", false],
                        ["Mana", "500", "900", "1400", "1900", false],
                        ["Mana Regen", "4.0", "4.8", "5.8", "6.8", false],
                        ["Movement SPD", "240", "240", "240", "240", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+145 HP/level", note: "Stabil & Linear" },
                    { stat: "Physical ATK Growth", value: "+7.6 ATK/level", note: "Konsisten" },
                    { stat: "Physical Defense", value: "+4.0/level", note: "Tepat +4.0" },
                    { stat: "Magic Defense", value: "+2.5/level", note: "Rata-rata" },
                    { stat: "Attack Speed", value: "+0.01/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.3/level", note: "Rata-rata" },
                    { stat: "Mana", value: "+100/level", note: "Tepat +100" },
                    { stat: "Mana Regen", value: "+0.2/level", note: "Tepat +0.2" }
                ],
                conclusion: ["+145 HP", "+7.6 Physical ATK", "+4.0 Physical Defense", "+2.5 Magic Defense", "+0.01 Attack Speed", "+0.3 HP Regen", "+100 Mana", "+0.2 Mana Regen"]
            },
            luoyi: { name: "Luo Yi", icon: "🌟",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2440", "3140", "4015", "4890", false],
                        ["Physical ATK", "107", "131", "162", "193", true],
                        ["Physical Defense", "18", "34", "54", "74", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "0.99", "1.03", "1.08", "1.13", false],
                        ["HP Regen", "7.2", "8.4", "9.8", "11.4", false],
                        ["Mana", "500", "900", "1400", "1900", false],
                        ["Mana Regen", "4.0", "4.8", "5.8", "6.8", false],
                        ["Movement SPD", "250", "250", "250", "250", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+175 HP/level", note: "Stabil & Linear" },
                    { stat: "Physical ATK Growth", value: "+6.1 ATK/level", note: "Konsisten" },
                    { stat: "Physical Defense", value: "+4.0/level", note: "Tepat +4.0" },
                    { stat: "Magic Defense", value: "+2.5/level", note: "Rata-rata" },
                    { stat: "Attack Speed", value: "+0.01/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.3/level", note: "Rata-rata" },
                    { stat: "Mana", value: "+100/level", note: "Tepat +100" },
                    { stat: "Mana Regen", value: "+0.2/level", note: "Tepat +0.2" }
                ],
                conclusion: ["+175 HP", "+6.1 Physical ATK", "+4.0 Physical Defense", "+2.5 Magic Defense", "+0.01 Attack Speed", "+0.3 HP Regen", "+100 Mana", "+0.2 Mana Regen"]
            },
            xavier: { name: "Xavier", icon: "⚔️",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2380", "3000", "3775", "4550", false],
                        ["Physical ATK", "111", "136", "167", "198", true],
                        ["Physical Defense", "17", "33", "53", "73", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "1.00", "1.04", "1.09", "1.14", false],
                        ["HP Regen", "6.8", "8.0", "9.4", "11.0", false],
                        ["Mana", "500", "900", "1400", "1900", false],
                        ["Mana Regen", "4.0", "4.8", "5.8", "6.8", false],
                        ["Movement SPD", "250", "250", "250", "250", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+155 HP/level", note: "Stabil & Linear" },
                    { stat: "Physical ATK Growth", value: "+6.2 ATK/level", note: "Konsisten" },
                    { stat: "Physical Defense", value: "+4.0/level", note: "Tepat +4.0" },
                    { stat: "Magic Defense", value: "+2.5/level", note: "Rata-rata" },
                    { stat: "Attack Speed", value: "+0.01/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.3/level", note: "Rata-rata" },
                    { stat: "Mana", value: "+100/level", note: "Tepat +100" },
                    { stat: "Mana Regen", value: "+0.2/level", note: "Tepat +0.2" }
                ],
                conclusion: ["+155 HP", "+6.2 Physical ATK", "+4.0 Physical Defense", "+2.5 Magic Defense", "+0.01 Attack Speed", "+0.3 HP Regen", "+100 Mana", "+0.2 Mana Regen"]
            },
            bane: { name: "Bane", icon: "🦐",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2381", "3361", "4586", "5811", false],
                        ["Physical ATK", "117", "160", "215", "269", true],
                        ["Physical Defense", "23", "40", "62", "84", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "1.06", "1.14", "1.24", "1.34", false],
                        ["HP Regen", "8.4", "10.8", "13.8", "16.8", false],
                        ["Mana", "500", "900", "1400", "1900", false],
                        ["Mana Regen", "4.0", "4.8", "5.8", "6.8", false],
                        ["Movement SPD", "260", "260", "260", "260", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+245 HP/level", note: "Stabil & Linear" },
                    { stat: "Physical ATK Growth", value: "+10.8 ATK/level", note: "Konsisten" },
                    { stat: "Physical Defense", value: "+4.4/level", note: "Rata-rata" },
                    { stat: "Magic Defense", value: "+2.5/level", note: "Rata-rata" },
                    { stat: "Attack Speed", value: "+0.02/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.6/level", note: "Tepat +0.6" },
                    { stat: "Mana", value: "+100/level", note: "Tepat +100" },
                    { stat: "Mana Regen", value: "+0.2/level", note: "Tepat +0.2" }
                ],
                conclusion: ["+245 HP", "+10.8 Physical ATK", "+4.4 Physical Defense", "+2.5 Magic Defense", "+0.02 Attack Speed", "+0.6 HP Regen", "+100 Mana", "+0.2 Mana Regen"]
            },
            harith: { name: "Harith", icon: "🌟",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2280", "2984", "3864", "4744", false],
                        ["Physical ATK", "114", "135", "161", "187", true],
                        ["Physical Defense", "19", "36", "57", "79", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "1.05", "1.11", "1.18", "1.26", false],
                        ["HP Regen", "7.2", "8.4", "9.8", "11.4", false],
                        ["Mana", "500", "900", "1400", "1900", false],
                        ["Mana Regen", "4.0", "4.8", "5.8", "6.8", false],
                        ["Movement SPD", "240", "240", "240", "240", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+176 HP/level", note: "Stabil & Linear" },
                    { stat: "Physical ATK Growth", value: "+5.2 ATK/level", note: "Konsisten" },
                    { stat: "Physical Defense", value: "+4.3/level", note: "Rata-rata" },
                    { stat: "Magic Defense", value: "+2.5/level", note: "Rata-rata" },
                    { stat: "Attack Speed", value: "+0.015/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.3/level", note: "Rata-rata" },
                    { stat: "Mana", value: "+100/level", note: "Tepat +100" },
                    { stat: "Mana Regen", value: "+0.2/level", note: "Tepat +0.2" }
                ],
                conclusion: ["+176 HP", "+5.2 Physical ATK", "+4.3 Physical Defense", "+2.5 Magic Defense", "+0.015 Attack Speed", "+0.3 HP Regen", "+100 Mana", "+0.2 Mana Regen"]
            },
            pharsa: { name: "Pharsa", icon: "🦅",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2320", "2900", "3625", "4350", false],
                        ["Physical ATK", "109", "134", "167", "199", true],
                        ["Physical Defense", "16", "32", "52", "72", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "0.98", "1.02", "1.07", "1.12", false],
                        ["HP Regen", "6.8", "8.0", "9.4", "11.0", false],
                        ["Mana", "500", "900", "1400", "1900", false],
                        ["Mana Regen", "4.0", "4.8", "5.8", "6.8", false],
                        ["Movement SPD", "240", "240", "240", "240", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+145 HP/level", note: "Stabil & Linear" },
                    { stat: "Physical ATK Growth", value: "+6.4 ATK/level", note: "Konsisten" },
                    { stat: "Physical Defense", value: "+4.0/level", note: "Tepat +4.0" },
                    { stat: "Magic Defense", value: "+2.5/level", note: "Rata-rata" },
                    { stat: "Attack Speed", value: "+0.01/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.3/level", note: "Rata-rata" },
                    { stat: "Mana", value: "+100/level", note: "Tepat +100" },
                    { stat: "Mana Regen", value: "+0.2/level", note: "Tepat +0.2" }
                ],
                conclusion: ["+145 HP", "+6.4 Physical ATK", "+4.0 Physical Defense", "+2.5 Magic Defense", "+0.01 Attack Speed", "+0.3 HP Regen", "+100 Mana", "+0.2 Mana Regen"]
            },
            gord: { name: "Gord", icon: "🔮",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2380", "2960", "3685", "4410", false],
                        ["Physical ATK", "110", "134", "165", "196", true],
                        ["Physical Defense", "17", "33", "53", "73", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "0.96", "1.00", "1.05", "1.10", false],
                        ["HP Regen", "6.4", "7.6", "9.0", "10.6", false],
                        ["Mana", "500", "900", "1400", "1900", false],
                        ["Mana Regen", "4.0", "4.8", "5.8", "6.8", false],
                        ["Movement SPD", "250", "250", "250", "250", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+145 HP/level", note: "Stabil & Linear" },
                    { stat: "Physical ATK Growth", value: "+6.1 ATK/level", note: "Konsisten" },
                    { stat: "Physical Defense", value: "+4.0/level", note: "Tepat +4.0" },
                    { stat: "Magic Defense", value: "+2.5/level", note: "Rata-rata" },
                    { stat: "Attack Speed", value: "+0.01/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.3/level", note: "Rata-rata" },
                    { stat: "Mana", value: "+100/level", note: "Tepat +100" },
                    { stat: "Mana Regen", value: "+0.2/level", note: "Tepat +0.2" }
                ],
                conclusion: ["+145 HP", "+6.1 Physical ATK", "+4.0 Physical Defense", "+2.5 Magic Defense", "+0.01 Attack Speed", "+0.3 HP Regen", "+100 Mana", "+0.2 Mana Regen"]
            },
            yve: { name: "Yve", icon: "🌌",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2320", "2900", "3625", "4350", false],
                        ["Physical ATK", "115", "140", "173", "205", true],
                        ["Physical Defense", "16", "32", "52", "72", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "0.98", "1.02", "1.07", "1.12", false],
                        ["HP Regen", "7.2", "8.4", "9.8", "11.4", false],
                        ["Mana", "500", "900", "1400", "1900", false],
                        ["Mana Regen", "4.0", "4.8", "5.8", "6.8", false],
                        ["Movement SPD", "245", "245", "245", "245", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+145 HP/level", note: "Stabil & Linear" },
                    { stat: "Physical ATK Growth", value: "+6.4 ATK/level", note: "Konsisten" },
                    { stat: "Physical Defense", value: "+4.0/level", note: "Tepat +4.0" },
                    { stat: "Magic Defense", value: "+2.5/level", note: "Rata-rata" },
                    { stat: "Attack Speed", value: "+0.01/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.3/level", note: "Rata-rata" },
                    { stat: "Mana", value: "+100/level", note: "Tepat +100" },
                    { stat: "Mana Regen", value: "+0.2/level", note: "Tepat +0.2" }
                ],
                conclusion: ["+145 HP", "+6.4 Physical ATK", "+4.0 Physical Defense", "+2.5 Magic Defense", "+0.01 Attack Speed", "+0.3 HP Regen", "+100 Mana", "+0.2 Mana Regen"]
            },
            eudora: { name: "Eudora", icon: "⚡",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2440", "3140", "4015", "4890", false],
                        ["Physical ATK", "112", "135", "164", "193", true],
                        ["Physical Defense", "18", "34", "54", "74", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "1.00", "1.04", "1.09", "1.14", false],
                        ["HP Regen", "7.6", "8.8", "10.4", "12.0", false],
                        ["Mana", "500", "900", "1400", "1900", false],
                        ["Mana Regen", "4.0", "4.8", "5.8", "6.8", false],
                        ["Movement SPD", "250", "250", "250", "250", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+175 HP/level", note: "Stabil & Linear" },
                    { stat: "Physical ATK Growth", value: "+5.8 ATK/level", note: "Konsisten" },
                    { stat: "Physical Defense", value: "+4.0/level", note: "Tepat +4.0" },
                    { stat: "Magic Defense", value: "+2.5/level", note: "Rata-rata" },
                    { stat: "Attack Speed", value: "+0.01/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.3/level", note: "Rata-rata" },
                    { stat: "Mana", value: "+100/level", note: "Tepat +100" },
                    { stat: "Mana Regen", value: "+0.2/level", note: "Tepat +0.2" }
                ],
                conclusion: ["+175 HP", "+5.8 Physical ATK", "+4.0 Physical Defense", "+2.5 Magic Defense", "+0.01 Attack Speed", "+0.3 HP Regen", "+100 Mana", "+0.2 Mana Regen"]
            },
            lunox: { name: "Lunox", icon: "🌙",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2440", "3100", "3925", "4750", false],
                        ["Physical ATK", "115", "140", "171", "202", true],
                        ["Physical Defense", "18", "34", "54", "74", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "1.01", "1.05", "1.10", "1.15", false],
                        ["HP Regen", "6.8", "8.0", "9.4", "11.0", false],
                        ["Mana", "500", "900", "1400", "1900", false],
                        ["Mana Regen", "4.0", "4.8", "5.8", "6.8", false],
                        ["Movement SPD", "240", "240", "240", "240", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+165 HP/level", note: "Stabil & Linear" },
                    { stat: "Physical ATK Growth", value: "+6.2 ATK/level", note: "Konsisten" },
                    { stat: "Physical Defense", value: "+4.0/level", note: "Tepat +4.0" },
                    { stat: "Magic Defense", value: "+2.5/level", note: "Rata-rata" },
                    { stat: "Attack Speed", value: "+0.01/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.3/level", note: "Rata-rata" },
                    { stat: "Mana", value: "+100/level", note: "Tepat +100" },
                    { stat: "Mana Regen", value: "+0.2/level", note: "Tepat +0.2" }
                ],
                conclusion: ["+165 HP", "+6.2 Physical ATK", "+4.0 Physical Defense", "+2.5 Magic Defense", "+0.01 Attack Speed", "+0.3 HP Regen", "+100 Mana", "+0.2 Mana Regen"]
            },
            vexana: { name: "Vexana", icon: "💀",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2380", "3000", "3775", "4550", false],
                        ["Physical ATK", "112", "135", "164", "193", true],
                        ["Physical Defense", "17", "33", "53", "73", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "1.00", "1.04", "1.09", "1.14", false],
                        ["HP Regen", "7.6", "8.8", "10.2", "11.8", false],
                        ["Mana", "500", "900", "1400", "1900", false],
                        ["Mana Regen", "4.0", "4.8", "5.8", "6.8", false],
                        ["Movement SPD", "250", "250", "250", "250", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+155 HP/level", note: "Stabil & Linear" },
                    { stat: "Physical ATK Growth", value: "+5.8 ATK/level", note: "Konsisten" },
                    { stat: "Physical Defense", value: "+4.0/level", note: "Tepat +4.0" },
                    { stat: "Magic Defense", value: "+2.5/level", note: "Rata-rata" },
                    { stat: "Attack Speed", value: "+0.01/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.3/level", note: "Rata-rata" },
                    { stat: "Mana", value: "+100/level", note: "Tepat +100" },
                    { stat: "Mana Regen", value: "+0.2/level", note: "Tepat +0.2" }
                ],
                conclusion: ["+155 HP", "+5.8 Physical ATK", "+4.0 Physical Defense", "+2.5 Magic Defense", "+0.01 Attack Speed", "+0.3 HP Regen", "+100 Mana", "+0.2 Mana Regen"]
            },
            zhask: { name: "Zhask", icon: "🦂",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2380", "2960", "3685", "4410", false],
                        ["Physical ATK", "107", "136", "172", "208", true],
                        ["Physical Defense", "17", "33", "53", "73", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "1.00", "1.00", "1.00", "1.00", false],
                        ["HP Regen", "6.8", "8.0", "9.4", "11.0", false],
                        ["Mana", "500", "900", "1400", "1900", false],
                        ["Mana Regen", "4.0", "4.8", "5.8", "6.8", false],
                        ["Movement SPD", "250", "250", "250", "250", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+145 HP/level", note: "Stabil & Linear" },
                    { stat: "Physical ATK Growth", value: "+7.2 ATK/level", note: "Konsisten" },
                    { stat: "Physical Defense", value: "+4.0/level", note: "Tepat +4.0" },
                    { stat: "Magic Defense", value: "+2.5/level", note: "Rata-rata" },
                    { stat: "Attack Speed", value: "+0.00/level", note: "Statis (Tidak Bertambah)" },
                    { stat: "HP Regen", value: "+0.3/level", note: "Rata-rata" },
                    { stat: "Mana", value: "+100/level", note: "Tepat +100" },
                    { stat: "Mana Regen", value: "+0.2/level", note: "Tepat +0.2" }
                ],
                conclusion: ["+145 HP", "+7.2 Physical ATK", "+4.0 Physical Defense", "+2.5 Magic Defense", "+0.00 Attack Speed", "+0.3 HP Regen", "+100 Mana", "+0.2 Mana Regen"]
            },
             alice: { name: "Alice", icon: "🩸",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2452", "3180", "4090", "5000", false],
                        ["Physical ATK", "114", "136", "163", "191", true],
                        ["Physical Defense", "25", "41", "61", "81", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "1.00", "1.10", "1.22", "1.35", false],
                        ["HP Regen", "7.2", "8.4", "9.8", "11.4", false],
                        ["Mana", "0", "0", "0", "0", false],
                        ["Mana Regen", "0", "0", "0", "0", false],
                        ["Movement SPD", "240", "240", "240", "240", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+182 HP/level", note: "Stabil & Linear" },
                    { stat: "Physical ATK Growth", value: "+5.5 ATK/level", note: "Konsisten" },
                    { stat: "Physical Defense", value: "+4.0/level", note: "Tepat +4.0" },
                    { stat: "Magic Defense", value: "+2.5/level", note: "Rata-rata" },
                    { stat: "Attack Speed", value: "+0.025/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.3/level", note: "Rata-rata" },
                    { stat: "Mana", value: "0/level", note: "Alice tidak menggunakan Mana" },
                    { stat: "Mana Regen", value: "0/level", note: "Tidak berlaku" }
                ],
                conclusion: ["+182 HP", "+5.5 Physical ATK", "+4.0 Physical Defense", "+2.5 Magic Defense", "+0.025 Attack Speed", "+0.3 HP Regen", "Mana & Mana Regen: 0 (Hero tanpa Mana)"]
            },
            harley: { name: "Harley", icon: "🎩",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2380", "2960", "3685", "4410", false],
                        ["Physical ATK", "114", "139", "170", "201", true],
                        ["Physical Defense", "19", "34", "53", "72", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "1.06", "1.12", "1.19", "1.27", false],
                        ["HP Regen", "7.2", "8.4", "9.8", "11.4", false],
                        ["Mana", "500", "900", "1400", "1900", false],
                        ["Mana Regen", "4.0", "4.8", "5.8", "6.8", false],
                        ["Movement SPD", "240", "240", "240", "240", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+145 HP/level", note: "Stabil & Linear" },
                    { stat: "Physical ATK Growth", value: "+6.2 ATK/level", note: "Konsisten" },
                    { stat: "Physical Defense", value: "+3.8/level", note: "Rata-rata" },
                    { stat: "Magic Defense", value: "+2.5/level", note: "Rata-rata" },
                    { stat: "Attack Speed", value: "+0.015/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.3/level", note: "Rata-rata" },
                    { stat: "Mana", value: "+100/level", note: "Tepat +100" },
                    { stat: "Mana Regen", value: "+0.2/level", note: "Tepat +0.2" }
                ],
                conclusion: ["+145 HP", "+6.2 Physical ATK", "+3.8 Physical Defense", "+2.5 Magic Defense", "+0.015 Attack Speed", "+0.3 HP Regen", "+100 Mana", "+0.2 Mana Regen"]
            },
            odette: { name: "Odette", icon: "🩰",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2440", "3140", "4015", "4890", false],
                        ["Physical ATK", "105", "126", "152", "178", true],
                        ["Physical Defense", "18", "34", "54", "74", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "1.00", "1.06", "1.13", "1.21", false],
                        ["HP Regen", "6.8", "8.0", "9.4", "11.0", false],
                        ["Mana", "500", "900", "1400", "1900", false],
                        ["Mana Regen", "4.0", "4.8", "5.8", "6.8", false],
                        ["Movement SPD", "250", "250", "250", "250", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+175 HP/level", note: "Stabil & Linear" },
                    { stat: "Physical ATK Growth", value: "+5.2 ATK/level", note: "Konsisten" },
                    { stat: "Physical Defense", value: "+4.0/level", note: "Tepat +4.0" },
                    { stat: "Magic Defense", value: "+2.5/level", note: "Rata-rata" },
                    { stat: "Attack Speed", value: "+0.015/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.3/level", note: "Rata-rata" },
                    { stat: "Mana", value: "+100/level", note: "Tepat +100" },
                    { stat: "Mana Regen", value: "+0.2/level", note: "Tepat +0.2" }
                ],
                conclusion: ["+175 HP", "+5.2 Physical ATK", "+4.0 Physical Defense", "+2.5 Magic Defense", "+0.015 Attack Speed", "+0.3 HP Regen", "+100 Mana", "+0.2 Mana Regen"]
            },
            esmeralda: { name: "Esmeralda", icon: "💎",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2464", "3290", "4322", "5355", false],
                        ["Physical ATK", "114", "136", "163", "191", true],
                        ["Physical Defense", "21", "46", "77", "109", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "1.00", "1.04", "1.09", "1.14", false],
                        ["HP Regen", "7.2", "8.4", "9.8", "11.4", false],
                        ["Mana", "500", "900", "1400", "1900", false],
                        ["Mana Regen", "4.0", "4.8", "5.8", "6.8", false],
                        ["Movement SPD", "240", "240", "240", "240", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+206 HP/level", note: "Stabil & Linear" },
                    { stat: "Physical ATK Growth", value: "+5.5 ATK/level", note: "Konsisten" },
                    { stat: "Physical Defense", value: "+6.3/level", note: "Rata-rata (Tinggi)" },
                    { stat: "Magic Defense", value: "+2.5/level", note: "Rata-rata" },
                    { stat: "Attack Speed", value: "+0.01/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.3/level", note: "Rata-rata" },
                    { stat: "Mana", value: "+100/level", note: "Tepat +100" },
                    { stat: "Mana Regen", value: "+0.2/level", note: "Tepat +0.2" }
                ],
                conclusion: ["+206 HP", "+5.5 Physical ATK", "+6.3 Physical Defense", "+2.5 Magic Defense", "+0.01 Attack Speed", "+0.3 HP Regen", "+100 Mana", "+0.2 Mana Regen"]
            },
            vale: { name: "Vale", icon: "🌬️",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2380", "2960", "3685", "4410", false],
                        ["Physical ATK", "115", "143", "179", "215", true],
                        ["Physical Defense", "17", "33", "53", "73", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "1.00", "1.04", "1.09", "1.14", false],
                        ["HP Regen", "6.8", "8.0", "9.4", "11.0", false],
                        ["Mana", "500", "900", "1400", "1900", false],
                        ["Mana Regen", "4.0", "4.8", "5.8", "6.8", false],
                        ["Movement SPD", "250", "250", "250", "250", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+145 HP/level", note: "Stabil & Linear" },
                    { stat: "Physical ATK Growth", value: "+7.2 ATK/level", note: "Konsisten" },
                    { stat: "Physical Defense", value: "+4.0/level", note: "Tepat +4.0" },
                    { stat: "Magic Defense", value: "+2.5/level", note: "Rata-rata" },
                    { stat: "Attack Speed", value: "+0.01/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.3/level", note: "Rata-rata" },
                    { stat: "Mana", value: "+100/level", note: "Tepat +100" },
                    { stat: "Mana Regen", value: "+0.2/level", note: "Tepat +0.2" }
                ],
                conclusion: ["+145 HP", "+7.2 Physical ATK", "+4.0 Physical Defense", "+2.5 Magic Defense", "+0.01 Attack Speed", "+0.3 HP Regen", "+100 Mana", "+0.2 Mana Regen"]
            },
            cyclops: { name: "Cyclops", icon: "👁️",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2440", "3140", "4015", "4890", false],
                        ["Physical ATK", "112", "135", "164", "193", true],
                        ["Physical Defense", "18", "34", "54", "74", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "1.00", "1.04", "1.09", "1.14", false],
                        ["HP Regen", "7.6", "8.8", "10.4", "12.0", false],
                        ["Mana", "500", "900", "1400", "1900", false],
                        ["Mana Regen", "4.0", "4.8", "5.8", "6.8", false],
                        ["Movement SPD", "240", "240", "240", "240", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+175 HP/level", note: "Stabil & Linear" },
                    { stat: "Physical ATK Growth", value: "+5.8 ATK/level", note: "Konsisten" },
                    { stat: "Physical Defense", value: "+4.0/level", note: "Tepat +4.0" },
                    { stat: "Magic Defense", value: "+2.5/level", note: "Rata-rata" },
                    { stat: "Attack Speed", value: "+0.01/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.3/level", note: "Rata-rata" },
                    { stat: "Mana", value: "+100/level", note: "Tepat +100" },
                    { stat: "Mana Regen", value: "+0.2/level", note: "Tepat +0.2" }
                ],
                conclusion: ["+175 HP", "+5.8 Physical ATK", "+4.0 Physical Defense", "+2.5 Magic Defense", "+0.01 Attack Speed", "+0.3 HP Regen", "+100 Mana", "+0.2 Mana Regen"]
            },
            nana: { name: "Nana", icon: "🐱",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2380", "3000", "3775", "4550", false],
                        ["Physical ATK", "115", "144", "181", "217", true],
                        ["Physical Defense", "17", "33", "53", "73", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "1.08", "1.18", "1.30", "1.43", false],
                        ["HP Regen", "6.8", "8.0", "9.4", "11.0", false],
                        ["Mana", "500", "900", "1400", "1900", false],
                        ["Mana Regen", "4.0", "4.8", "5.8", "6.8", false],
                        ["Movement SPD", "250", "250", "250", "250", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+155 HP/level", note: "Stabil & Linear" },
                    { stat: "Physical ATK Growth", value: "+7.3 ATK/level", note: "Konsisten" },
                    { stat: "Physical Defense", value: "+4.0/level", note: "Tepat +4.0" },
                    { stat: "Magic Defense", value: "+2.5/level", note: "Rata-rata" },
                    { stat: "Attack Speed", value: "+0.025/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.3/level", note: "Rata-rata" },
                    { stat: "Mana", value: "+100/level", note: "Tepat +100" },
                    { stat: "Mana Regen", value: "+0.2/level", note: "Tepat +0.2" }
                ],
                conclusion: ["+155 HP", "+7.3 Physical ATK", "+4.0 Physical Defense", "+2.5 Magic Defense", "+0.025 Attack Speed", "+0.3 HP Regen", "+100 Mana", "+0.2 Mana Regen"]
            },
            kagura: { name: "Kagura", icon: "🎎",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2380", "2960", "3685", "4410", false],
                        ["Physical ATK", "118", "150", "190", "230", true],
                        ["Physical Defense", "17", "33", "53", "73", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "1.02", "1.06", "1.11", "1.16", false],
                        ["HP Regen", "7.0", "8.6", "10.6", "12.8", false],
                        ["Mana", "500", "900", "1400", "1900", false],
                        ["Mana Regen", "4.0", "4.8", "5.8", "6.8", false],
                        ["Movement SPD", "240", "240", "240", "240", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+145 HP/level", note: "Stabil & Linear" },
                    { stat: "Physical ATK Growth", value: "+8.0 ATK/level", note: "Sangat Konsisten" },
                    { stat: "Physical Defense", value: "+4.0/level", note: "Tepat +4.0" },
                    { stat: "Magic Defense", value: "+2.5/level", note: "Rata-rata" },
                    { stat: "Attack Speed", value: "+0.01/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.4/level", note: "Rata-rata" },
                    { stat: "Mana", value: "+100/level", note: "Tepat +100" },
                    { stat: "Mana Regen", value: "+0.2/level", note: "Tepat +0.2" }
                ],
                conclusion: ["+145 HP", "+8.0 Physical ATK", "+4.0 Physical Defense", "+2.5 Magic Defense", "+0.01 Attack Speed", "+0.4 HP Regen", "+100 Mana", "+0.2 Mana Regen"]
            },
            faramis: { name: "Faramis", icon: "☠️",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2500", "3240", "4165", "5090", false],
                        ["Physical ATK", "118", "146", "181", "216", true],
                        ["Physical Defense", "20", "38", "60", "83", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "0.98", "1.02", "1.07", "1.12", false],
                        ["HP Regen", "6.8", "7.8", "9.4", "10.8", false],
                        ["Mana", "500", "900", "1400", "1900", false],
                        ["Mana Regen", "4.0", "4.8", "5.8", "6.8", false],
                        ["Movement SPD", "240", "240", "240", "240", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+185 HP/level", note: "Stabil & Linear" },
                    { stat: "Physical ATK Growth", value: "+7.0 ATK/level", note: "Konsisten" },
                    { stat: "Physical Defense", value: "+4.5/level", note: "Rata-rata" },
                    { stat: "Magic Defense", value: "+2.5/level", note: "Rata-rata" },
                    { stat: "Attack Speed", value: "+0.01/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.3/level", note: "Rata-rata" },
                    { stat: "Mana", value: "+100/level", note: "Tepat +100" },
                    { stat: "Mana Regen", value: "+0.2/level", note: "Tepat +0.2" }
                ],
                conclusion: ["+185 HP", "+7.0 Physical ATK", "+4.5 Physical Defense", "+2.5 Magic Defense", "+0.01 Attack Speed", "+0.3 HP Regen", "+100 Mana", "+0.2 Mana Regen"]
            },
            lylia: { name: "Lylia", icon: "🧙‍♀️",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2380", "2960", "3685", "4410", false],
                        ["Physical ATK", "113", "140", "173", "207", true],
                        ["Physical Defense", "17", "33", "53", "73", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "1.01", "1.05", "1.10", "1.15", false],
                        ["HP Regen", "6.8", "8.0", "9.4", "11.0", false],
                        ["Mana", "500", "900", "1400", "1900", false],
                        ["Mana Regen", "4.0", "4.8", "5.8", "6.8", false],
                        ["Movement SPD", "245", "245", "245", "245", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+145 HP/level", note: "Stabil & Linear" },
                    { stat: "Physical ATK Growth", value: "+6.7 ATK/level", note: "Konsisten" },
                    { stat: "Physical Defense", value: "+4.0/level", note: "Tepat +4.0" },
                    { stat: "Magic Defense", value: "+2.5/level", note: "Rata-rata" },
                    { stat: "Attack Speed", value: "+0.01/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.3/level", note: "Rata-rata" },
                    { stat: "Mana", value: "+100/level", note: "Tepat +100" },
                    { stat: "Mana Regen", value: "+0.2/level", note: "Tepat +0.2" }
                ],
                conclusion: ["+145 HP", "+6.7 Physical ATK", "+4.0 Physical Defense", "+2.5 Magic Defense", "+0.01 Attack Speed", "+0.3 HP Regen", "+100 Mana", "+0.2 Mana Regen"]
            },
            cecilion: { name: "Cecilion", icon: "🧛",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2380", "3000", "3775", "4550", false],
                        ["Physical ATK", "105", "124", "147", "171", true],
                        ["Physical Defense", "17", "33", "53", "73", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "1.00", "1.04", "1.09", "1.14", false],
                        ["HP Regen", "6.8", "8.0", "9.4", "11.0", false],
                        ["Mana", "700", "1260", "1960", "2660", false],
                        ["Mana Regen", "5.6", "6.6", "8.0", "9.4", false],
                        ["Movement SPD", "250", "250", "250", "250", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+155 HP/level", note: "Stabil & Linear" },
                    { stat: "Physical ATK Growth", value: "+4.7 ATK/level", note: "Konsisten" },
                    { stat: "Physical Defense", value: "+4.0/level", note: "Tepat +4.0" },
                    { stat: "Magic Defense", value: "+2.5/level", note: "Rata-rata" },
                    { stat: "Attack Speed", value: "+0.01/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.3/level", note: "Rata-rata" },
                    { stat: "Mana", value: "+140/level", note: "Sangat Tinggi (Unique)" },
                    { stat: "Mana Regen", value: "+0.27/level", note: "Rata-rata" }
                ],
                conclusion: ["+155 HP", "+4.7 Physical ATK", "+4.0 Physical Defense", "+2.5 Magic Defense", "+0.01 Attack Speed", "+0.3 HP Regen", "+140 Mana (Jauh di atas rata-rata)", "+0.27 Mana Regen"]
            },
            novaria: { name: "Novaria", icon: "🌌",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2260", "2800", "3475", "4150", false],
                        ["Physical ATK", "115", "140", "171", "202", true],
                        ["Physical Defense", "15", "29", "46", "64", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "1.01", "1.05", "1.10", "1.15", false],
                        ["HP Regen", "6.8", "8.0", "9.4", "11.0", false],
                        ["Mana", "500", "900", "1400", "1900", false],
                        ["Mana Regen", "4.0", "4.8", "5.8", "6.8", false],
                        ["Movement SPD", "240", "240", "240", "240", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+135 HP/level", note: "Stabil & Linear" },
                    { stat: "Physical ATK Growth", value: "+6.2 ATK/level", note: "Konsisten" },
                    { stat: "Physical Defense", value: "+3.5/level", note: "Rata-rata" },
                    { stat: "Magic Defense", value: "+2.5/level", note: "Rata-rata" },
                    { stat: "Attack Speed", value: "+0.01/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.3/level", note: "Rata-rata" },
                    { stat: "Mana", value: "+100/level", note: "Tepat +100" },
                    { stat: "Mana Regen", value: "+0.2/level", note: "Tepat +0.2" }
                ],
                conclusion: ["+135 HP", "+6.2 Physical ATK", "+3.5 Physical Defense", "+2.5 Magic Defense", "+0.01 Attack Speed", "+0.3 HP Regen", "+100 Mana", "+0.2 Mana Regen"]
            },
            zhuxin: { name: "Zhuxin", icon: "🏮",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2440", "3100", "3925", "4750", false],
                        ["Physical ATK", "115", "140", "173", "205", true],
                        ["Physical Defense", "18", "34", "54", "74", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "0.98", "1.02", "1.07", "1.12", false],
                        ["HP Regen", "7.2", "8.4", "9.8", "11.4", false],
                        ["Mana", "1200", "1200", "1200", "1200", false],
                        ["Mana Regen", "9.6", "9.6", "9.6", "9.6", false],
                        ["Movement SPD", "245", "245", "245", "245", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+165 HP/level", note: "Stabil & Linear" },
                    { stat: "Physical ATK Growth", value: "+6.4 ATK/level", note: "Konsisten" },
                    { stat: "Physical Defense", value: "+4.0/level", note: "Tepat +4.0" },
                    { stat: "Magic Defense", value: "+2.5/level", note: "Rata-rata" },
                    { stat: "Attack Speed", value: "+0.01/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.3/level", note: "Rata-rata" },
                    { stat: "Mana", value: "0/level", note: "Fixed (Unique Mechanic)" },
                    { stat: "Mana Regen", value: "0/level", note: "Fixed (Unique Mechanic)" }
                ],
                conclusion: ["+165 HP", "+6.4 Physical ATK", "+4.0 Physical Defense", "+2.5 Magic Defense", "+0.01 Attack Speed", "+0.3 HP Regen", "Mana & Mana Regen: Fixed (Tidak berubah)"]
            },
            zetian: { name: "Zetian", icon: "👑",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2380", "3000", "3775", "4550", false],
                        ["Physical ATK", "95", "115", "140", "165", true],
                        ["Physical Defense", "17", "33", "53", "73", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "0.90", "0.94", "0.99", "1.04", false],
                        ["HP Regen", "6.8", "8.0", "9.4", "11.0", false],
                        ["Mana", "500", "900", "1400", "1900", false],
                        ["Mana Regen", "4.0", "4.8", "5.8", "6.8", false],
                        ["Movement SPD", "240", "240", "240", "240", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+155 HP/level", note: "Stabil & Linear" },
                    { stat: "Physical ATK Growth", value: "+5.0 ATK/level", note: "Konsisten" },
                    { stat: "Physical Defense", value: "+4.0/level", note: "Tepat +4.0" },
                    { stat: "Magic Defense", value: "+2.5/level", note: "Rata-rata" },
                    { stat: "Attack Speed", value: "+0.01/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.3/level", note: "Rata-rata" },
                    { stat: "Mana", value: "+100/level", note: "Tepat +100" },
                    { stat: "Mana Regen", value: "+0.2/level", note: "Tepat +0.2" }
                ],
                conclusion: ["+155 HP", "+5.0 Physical ATK", "+4.0 Physical Defense", "+2.5 Magic Defense", "+0.01 Attack Speed", "+0.3 HP Regen", "+100 Mana", "+0.2 Mana Regen"]
            },
            kimmy: {
                name: "Kimmy",
                icon: "🔫",
                stats: {
                    headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2380", "2960", "3685", "4410", false],
                        ["Physical ATK", "100", "140", "190", "240", true],
                        ["Physical Defense", "17", "33", "53", "73", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "1.00", "1.00", "1.00", "1.00", false],
                        ["HP Regen", "8.0", "8.8", "10.0", "11.2", false],
                        ["Energy", "100", "100", "100", "100", false],
                        ["Movement SPD", "245", "245", "245", "245", false]
                    ]
                },
                growth: [
                    { stat: "HP Growth", value: "+145 HP/level", note: "Stabil & Linear" },
                    { stat: "Physical ATK Growth", value: "+10 ATK/level", note: "Sangat Konsisten" },
                    { stat: "Physical Defense", value: "+4.0/level", note: "Tepat +4" },
                    { stat: "Magic Defense", value: "+2.4 - 2.6/level", note: "Rata-rata +2.5" },
                    { stat: "Attack Speed", value: "0/level", note: "Tidak Bertambah" },
                    { stat: "HP Regen", value: "+0.2 - 0.24/level", note: "Rata-rata +0.2" }
                ],
                conclusion: [
                    "+145 HP",
                    "+10 Physical ATK",
                    "+4 Physical Defense",
                    "+2.5 Magic Defense",
                    "0 Attack Speed (Fixed Base)",
                    "+0.2 HP Regen"
                ]
            }
        },
            tank: {
            akai: {
                name: "Akai", icon: "🐼",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2560", "3532", "4747", "5962", false],
                        ["Physical ATK", "128", "150", "178", "207", true],
                        ["Physical Defense", "24", "50", "84", "117", false],
                        ["Magic Defense", "15", "31", "51", "71", false],
                        ["Attack Speed", "1.06", "1.14", "1.24", "1.34", false],
                        ["HP Regen", "8.4", "10.8", "13.8", "16.8", false],
                        ["Mana", "500", "900", "1400", "1900", false],
                        ["Mana Regen", "4.0", "4.8", "5.8", "6.8", false],
                        ["Movement SPD", "260", "260", "260", "260", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+243 HP/level", note: "Sangat Tinggi (Tanky)" },
                    { stat: "Physical ATK Growth", value: "+5.6 ATK/level", note: "Standar" },
                    { stat: "Physical Defense", value: "+6.6/level", note: "Tinggi" },
                    { stat: "Magic Defense", value: "+4.0/level", note: "Stabil & Linear" },
                    { stat: "Attack Speed", value: "+0.02/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.6/level", note: "Bagus untuk sustain" }
                ],
                conclusion: ["+243 HP", "+5.6 Physical ATK", "+6.6 Physical Defense", "+4.0 Magic Defense", "+0.02 Attack Speed", "+0.6 HP Regen"]
            },
            tigreal: {
                name: "Tigreal", icon: "🛡️",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2581", "3809", "5344", "6879", false],
                        ["Physical ATK", "112", "139", "173", "207", true],
                        ["Physical Defense", "20", "53", "94", "136", false],
                        ["Magic Defense", "15", "31", "51", "71", false],
                        ["Attack Speed", "1.03", "1.11", "1.21", "1.31", false],
                        ["HP Regen", "8.4", "10.8", "13.8", "16.8", false],
                        ["Mana", "500", "900", "1400", "1900", false],
                        ["Mana Regen", "4.0", "4.8", "5.8", "6.8", false],
                        ["Movement SPD", "260", "260", "260", "260", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+307 HP/level", note: "Sangat Tinggi (Tank Murni)" },
                    { stat: "Physical ATK Growth", value: "+6.8 ATK/level", note: "Standar Tank" },
                    { stat: "Physical Defense", value: "+8.3/level", note: "Sangat Tinggi" },
                    { stat: "Magic Defense", value: "+4.0/level", note: "Stabil & Linear" },
                    { stat: "Attack Speed", value: "+0.02/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.6/level", note: "Bagus untuk sustain" }
                ],
                conclusion: ["+307 HP", "+6.8 Physical ATK", "+8.3 Physical Defense", "+4.0 Magic Defense", "+0.02 Attack Speed", "+0.6 HP Regen"]
            },
            franco: {
                name: "Franco", icon: "🪝",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2600", "3724", "5127", "6534", false],
                        ["Physical ATK", "116", "145", "181", "217", true],
                        ["Physical Defense", "25", "56", "95", "134", false],
                        ["Magic Defense", "15", "31", "51", "71", false],
                        ["Attack Speed", "1.03", "1.09", "1.16", "1.24", false],
                        ["HP Regen", "9.2", "11.8", "15.2", "18.6", false],
                        ["Mana", "500", "900", "1400", "1900", false],
                        ["Mana Regen", "4.0", "4.8", "5.8", "6.8", false],
                        ["Movement SPD", "260", "260", "260", "260", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+281 HP/level", note: "Sangat Tinggi (Tanky)" },
                    { stat: "Physical ATK Growth", value: "+7.2 ATK/level", note: "Standar" },
                    { stat: "Physical Defense", value: "+7.8/level", note: "Tinggi" },
                    { stat: "Magic Defense", value: "+4.0/level", note: "Stabil & Linear" },
                    { stat: "Attack Speed", value: "+0.015/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.67/level", note: "Bagus untuk sustain" }
                ],
                conclusion: ["+281 HP", "+7.2 Physical ATK", "+7.8 Physical Defense", "+4.0 Magic Defense", "+0.015 Attack Speed", "+0.67 HP Regen"]
            },
            minotaur: {
                name: "Minotaur", icon: "🐂",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2750", "3806", "5126", "6446", false],
                        ["Physical ATK", "123", "143", "169", "195", true],
                        ["Physical Defense", "23", "49", "83", "116", false],
                        ["Magic Defense", "15", "31", "51", "71", false],
                        ["Attack Speed", "0.91", "0.99", "1.09", "1.19", false],
                        ["HP Regen", "8.8", "11.2", "14.2", "17.2", false],
                        ["Mana", "0", "0", "0", "0", false],
                        ["Mana Regen", "0", "0", "0", "0", false],
                        ["Movement SPD", "260", "260", "260", "260", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+264 HP/level", note: "Sangat Tinggi (Tanky)" },
                    { stat: "Physical ATK Growth", value: "+5.1 ATK/level", note: "Standar" },
                    { stat: "Physical Defense", value: "+6.6/level", note: "Tinggi" },
                    { stat: "Magic Defense", value: "+4.0/level", note: "Stabil & Linear" },
                    { stat: "Attack Speed", value: "+0.02/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.6/level", note: "Bagus untuk sustain" },
                    { stat: "Mana", value: "0 (Rage User)", note: "Menggunakan Rage" }
                ],
                conclusion: ["+264 HP", "+5.1 Physical ATK", "+6.6 Physical Defense", "+4.0 Magic Defense", "+0.02 Attack Speed", "+0.6 HP Regen", "0 Mana (Rage User)"]
            },
            khufra: {
                name: "Khufra", icon: "🤡",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2670", "3690", "4965", "6240", false],
                        ["Physical ATK", "117", "142", "173", "204", true],
                        ["Physical Defense", "19", "47", "83", "119", false],
                        ["Magic Defense", "15", "31", "51", "71", false],
                        ["Attack Speed", "0.98", "1.04", "1.11", "1.19", false],
                        ["HP Regen", "9.4", "11.8", "15.0", "18.2", false],
                        ["Mana", "500", "900", "1400", "1900", false],
                        ["Mana Regen", "4.0", "4.8", "5.8", "6.8", false],
                        ["Movement SPD", "255", "255", "255", "255", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+255 HP/level", note: "Sangat Tinggi (Tanky)" },
                    { stat: "Physical ATK Growth", value: "+6.2 ATK/level", note: "Standar" },
                    { stat: "Physical Defense", value: "+7.1/level", note: "Tinggi" },
                    { stat: "Magic Defense", value: "+4.0/level", note: "Stabil & Linear" },
                    { stat: "Attack Speed", value: "+0.015/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.63/level", note: "Bagus untuk sustain" }
                ],
                conclusion: ["+255 HP", "+6.2 Physical ATK", "+7.1 Physical Defense", "+4.0 Magic Defense", "+0.015 Attack Speed", "+0.63 HP Regen"]
            },
            belerick: {
                name: "Belerick", icon: "🌳",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2460", "3420", "4620", "5820", false],
                        ["Physical ATK", "110", "138", "173", "208", true],
                        ["Physical Defense", "15", "41", "74", "107", false],
                        ["Magic Defense", "15", "31", "51", "71", false],
                        ["Attack Speed", "1.01", "1.05", "1.10", "1.15", false],
                        ["HP Regen", "8.4", "10.8", "13.8", "16.8", false],
                        ["Mana", "500", "900", "1400", "1900", false],
                        ["Mana Regen", "4.0", "4.8", "5.8", "6.8", false],
                        ["Movement SPD", "250", "250", "250", "250", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+240 HP/level", note: "Sangat Tinggi (Tanky)" },
                    { stat: "Physical ATK Growth", value: "+7 ATK/level", note: "Standar" },
                    { stat: "Physical Defense", value: "+6.6/level", note: "Tinggi" },
                    { stat: "Magic Defense", value: "+4.0/level", note: "Stabil & Linear" },
                    { stat: "Attack Speed", value: "+0.01/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.6/level", note: "Bagus untuk sustain" }
                ],
                conclusion: ["+240 HP", "+7 Physical ATK", "+6.6 Physical Defense", "+4.0 Magic Defense", "+0.01 Attack Speed", "+0.6 HP Regen"]
            },
            uranus: {
                name: "Uranus", icon: "🛡️",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2380", "3160", "4135", "5110", false],
                        ["Physical ATK", "115", "144", "181", "217", true],
                        ["Physical Defense", "19", "43", "74", "105", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "1.04", "1.12", "1.22", "1.32", false],
                        ["HP Regen", "6.4", "8.6", "11.6", "14.4", false],
                        ["Mana", "500", "900", "1400", "1900", false],
                        ["Mana Regen", "4.0", "4.8", "5.8", "6.8", false],
                        ["Movement SPD", "260", "260", "260", "260", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+195 HP/level", note: "Sangat Tinggi (Tanky)" },
                    { stat: "Physical ATK Growth", value: "+7.3 ATK/level", note: "Standar" },
                    { stat: "Physical Defense", value: "+6.1/level", note: "Tinggi" },
                    { stat: "Magic Defense", value: "+2.5/level", note: "Stabil & Linear" },
                    { stat: "Attack Speed", value: "+0.02/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.57/level", note: "Bagus untuk sustain" }
                ],
                conclusion: ["+195 HP", "+7.3 Physical ATK", "+6.1 Physical Defense", "+2.5 Magic Defense", "+0.02 Attack Speed", "+0.57 HP Regen"]
            },
            lolita: {
                name: "Lolita", icon: "🛡️",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2342", "3074", "3989", "4904", false],
                        ["Physical ATK", "115", "142", "177", "211", true],
                        ["Physical Defense", "20", "46", "80", "113", false],
                        ["Magic Defense", "15", "31", "51", "71", false],
                        ["Attack Speed", "0.98", "1.04", "1.11", "1.19", false],
                        ["HP Regen", "9.6", "12.0", "15.0", "18.0", false],
                        ["Mana", "500", "900", "1400", "1900", false],
                        ["Mana Regen", "4.0", "4.8", "5.8", "6.8", false],
                        ["Movement SPD", "260", "260", "260", "260", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+183 HP/level", note: "Sangat Tinggi (Tanky)" },
                    { stat: "Physical ATK Growth", value: "+6.9 ATK/level", note: "Standar" },
                    { stat: "Physical Defense", value: "+6.6/level", note: "Tinggi" },
                    { stat: "Magic Defense", value: "+4.0/level", note: "Stabil & Linear" },
                    { stat: "Attack Speed", value: "+0.015/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.6/level", note: "Bagus untuk sustain" }
                ],
                conclusion: ["+183 HP", "+6.9 Physical ATK", "+6.6 Physical Defense", "+4.0 Magic Defense", "+0.015 Attack Speed", "+0.6 HP Regen"]
            },
            hylos: {
                name: "Hylos", icon: "🐴",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2600", "3840", "5390", "6940", false],
                        ["Physical ATK", "105", "131", "164", "198", true],
                        ["Physical Defense", "17", "39", "66", "94", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "1.03", "1.11", "1.21", "1.31", false],
                        ["HP Regen", "18.4", "24.8", "32.8", "40.8", false],
                        ["Mana", "500", "900", "1400", "1900", false],
                        ["Mana Regen", "4.0", "4.8", "5.8", "6.8", false],
                        ["Movement SPD", "260", "260", "260", "260", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+310 HP/level", note: "Tertinggi di Game (Monster)" },
                    { stat: "Physical ATK Growth", value: "+6.6 ATK/level", note: "Standar" },
                    { stat: "Physical Defense", value: "+5.5/level", note: "Tinggi" },
                    { stat: "Magic Defense", value: "+2.5/level", note: "Stabil & Linear" },
                    { stat: "Attack Speed", value: "+0.02/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+1.6/level", note: "Sangat Tinggi (Passive)" }
                ],
                conclusion: ["+310 HP", "+6.6 Physical ATK", "+5.5 Physical Defense", "+2.5 Magic Defense", "+0.02 Attack Speed", "+1.6 HP Regen"]
            },
            johnson: {
                name: "Johnson", icon: "🚗",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2700", "3700", "4950", "6200", false],
                        ["Physical ATK", "120", "145", "177", "209", true],
                        ["Physical Defense", "27", "59", "99", "139", false],
                        ["Magic Defense", "15", "31", "51", "71", false],
                        ["Attack Speed", "1.03", "1.09", "1.16", "1.24", false],
                        ["HP Regen", "8.4", "10.8", "13.8", "16.8", false],
                        ["Mana", "0", "0", "0", "0", false],
                        ["Mana Regen", "0", "0", "0", "0", false],
                        ["Movement SPD", "255", "255", "255", "255", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+250 HP/level", note: "Sangat Tinggi (Tanky)" },
                    { stat: "Physical ATK Growth", value: "+6.4 ATK/level", note: "Standar" },
                    { stat: "Physical Defense", value: "+8.0/level", note: "Sangat Tinggi (Terbaik)" },
                    { stat: "Magic Defense", value: "+4.0/level", note: "Stabil & Linear" },
                    { stat: "Attack Speed", value: "+0.015/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.6/level", note: "Bagus untuk sustain" },
                    { stat: "Mana", value: "0 (Rage User)", note: "Menggunakan Rage/Energy" }
                ],
                conclusion: ["+250 HP", "+6.4 Physical ATK", "+8.0 Physical Defense", "+4.0 Magic Defense", "+0.015 Attack Speed", "+0.6 HP Regen", "0 Mana (Rage User)"]
            },
            baxia: {
                name: "Baxia", icon: "🛡️",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2660", "3492", "4532", "5572", false],
                        ["Physical ATK", "125", "147", "175", "204", true],
                        ["Physical Defense", "23", "48", "79", "111", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "1.00", "1.08", "1.18", "1.28", false],
                        ["HP Regen", "8.4", "10.8", "13.8", "16.8", false],
                        ["Mana", "500", "900", "1400", "1900", false],
                        ["Mana Regen", "4.0", "4.8", "5.8", "6.8", false],
                        ["Movement SPD", "240", "240", "240", "240", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+208 HP/level", note: "Sangat Tinggi (Tanky)" },
                    { stat: "Physical ATK Growth", value: "+5.6 ATK/level", note: "Standar" },
                    { stat: "Physical Defense", value: "+6.3/level", note: "Tinggi" },
                    { stat: "Magic Defense", value: "+2.5/level", note: "Stabil & Linear" },
                    { stat: "Attack Speed", value: "+0.02/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.6/level", note: "Bagus untuk sustain" }
                ],
                conclusion: ["+208 HP", "+5.6 Physical ATK", "+6.3 Physical Defense", "+2.5 Magic Defense", "+0.02 Attack Speed", "+0.6 HP Regen"]
            },
            masha: {
                name: "Masha", icon: "⚔️",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2000", "2320", "2720", "3120", false],
                        ["Physical ATK", "90", "129", "177", "226", true],
                        ["Physical Defense", "15", "30", "49", "68", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "0.96", "1.10", "1.27", "1.45", false],
                        ["HP Regen", "3.8", "5.6", "7.8", "10.0", false],
                        ["Mana", "0", "0", "0", "0", false],
                        ["Mana Regen", "0", "0", "0", "0", false],
                        ["Movement SPD", "250", "250", "250", "250", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+80 HP/level", note: "Standar untuk Fighter" },
                    { stat: "Physical ATK Growth", value: "+9.7 ATK/level", note: "Sangat Tinggi" },
                    { stat: "Physical Defense", value: "+3.8/level", note: "Standar" },
                    { stat: "Magic Defense", value: "+2.5/level", note: "Stabil & Linear" },
                    { stat: "Attack Speed", value: "+0.035/level", note: "Cukup Cepat" },
                    { stat: "HP Regen", value: "+0.44/level", note: "Standar" },
                    { stat: "Mana", value: "0 (HP User)", note: "Menggunakan HP sebagai Mana" }
                ],
                conclusion: ["+80 HP", "+9.7 Physical ATK", "+3.8 Physical Defense", "+2.5 Magic Defense", "+0.035 Attack Speed", "+0.44 HP Regen", "0 Mana (HP User)"]
            },
            carmilla: {
                name: "Carmilla", icon: "🧛",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2419", "3387", "4597", "5807", false],
                        ["Physical ATK", "126", "163", "209", "255", true],
                        ["Physical Defense", "25", "54", "91", "128", false],
                        ["Magic Defense", "15", "31", "51", "71", false],
                        ["Attack Speed", "1.14", "1.26", "1.41", "1.56", false],
                        ["HP Regen", "7.8", "9.4", "11.8", "14.0", false],
                        ["Mana", "500", "900", "1400", "1900", false],
                        ["Mana Regen", "4.0", "4.8", "5.8", "6.8", false],
                        ["Movement SPD", "255", "255", "255", "255", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+242 HP/level", note: "Sangat Tinggi (Tanky)" },
                    { stat: "Physical ATK Growth", value: "+9.2 ATK/level", note: "Tinggi untuk Support" },
                    { stat: "Physical Defense", value: "+7.4/level", note: "Tinggi" },
                    { stat: "Magic Defense", value: "+4.0/level", note: "Stabil & Linear" },
                    { stat: "Attack Speed", value: "+0.03/level", note: "Cukup Cepat" },
                    { stat: "HP Regen", value: "+0.44/level", note: "Standar" }
                ],
                conclusion: ["+242 HP", "+9.2 Physical ATK", "+7.4 Physical Defense", "+4.0 Magic Defense", "+0.03 Attack Speed", "+0.44 HP Regen"]
            },
            atlas: {
                name: "Atlas", icon: "⛓️",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2710", "3682", "4897", "6112", false],
                        ["Physical ATK", "135", "168", "209", "250", true],
                        ["Physical Defense", "21", "49", "85", "121", false],
                        ["Magic Defense", "15", "31", "51", "71", false],
                        ["Attack Speed", "0.98", "1.02", "1.07", "1.12", false],
                        ["HP Regen", "8.4", "10.8", "13.8", "16.8", false],
                        ["Mana", "500", "900", "1400", "1900", false],
                        ["Mana Regen", "4.0", "4.8", "5.8", "6.8", false],
                        ["Movement SPD", "240", "240", "240", "240", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+243 HP/level", note: "Sangat Tinggi (Tanky)" },
                    { stat: "Physical ATK Growth", value: "+8.2 ATK/level", note: "Tinggi untuk Tank" },
                    { stat: "Physical Defense", value: "+7.1/level", note: "Tinggi" },
                    { stat: "Magic Defense", value: "+4.0/level", note: "Stabil & Linear" },
                    { stat: "Attack Speed", value: "+0.01/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.6/level", note: "Bagus untuk sustain" }
                ],
                conclusion: ["+243 HP", "+8.2 Physical ATK", "+7.1 Physical Defense", "+4.0 Magic Defense", "+0.01 Attack Speed", "+0.6 HP Regen"]
            },
            gloo: {
                name: "Gloo", icon: "👾",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2710", "3730", "5005", "6280", false],
                        ["Physical ATK", "120", "145", "178", "210", true],
                        ["Physical Defense", "18", "46", "82", "118", false],
                        ["Magic Defense", "15", "31", "51", "71", false],
                        ["Attack Speed", "0.98", "1.02", "1.07", "1.12", false],
                        ["HP Regen", "12.4", "14.8", "17.8", "20.8", false],
                        ["Mana", "500", "900", "1400", "1900", false],
                        ["Mana Regen", "4.0", "4.8", "5.8", "6.8", false],
                        ["Movement SPD", "245", "245", "245", "245", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+255 HP/level", note: "Sangat Tinggi (Tanky)" },
                    { stat: "Physical ATK Growth", value: "+6.4 ATK/level", note: "Standar" },
                    { stat: "Physical Defense", value: "+7.1/level", note: "Tinggi" },
                    { stat: "Magic Defense", value: "+4.0/level", note: "Stabil & Linear" },
                    { stat: "Attack Speed", value: "+0.01/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.6/level", note: "Bagus untuk sustain" }
                ],
                conclusion: ["+255 HP", "+6.4 Physical ATK", "+7.1 Physical Defense", "+4.0 Magic Defense", "+0.01 Attack Speed", "+0.6 HP Regen"]
            },
            chip: {
                name: "Chip", icon: "🤖",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2481", "3309", "4344", "5379", false],
                        ["Physical ATK", "112", "139", "173", "207", true],
                        ["Physical Defense", "20", "44", "74", "104", false],
                        ["Magic Defense", "15", "31", "51", "71", false],
                        ["Attack Speed", "1.03", "1.11", "1.21", "1.31", false],
                        ["HP Regen", "8.4", "10.8", "13.8", "16.8", false],
                        ["Mana", "500", "900", "1400", "1900", false],
                        ["Mana Regen", "4.0", "4.8", "5.8", "6.8", false],
                        ["Movement SPD", "260", "260", "260", "260", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+207 HP/level", note: "Sangat Tinggi (Tanky)" },
                    { stat: "Physical ATK Growth", value: "+6.8 ATK/level", note: "Standar" },
                    { stat: "Physical Defense", value: "+6.0/level", note: "Tinggi" },
                    { stat: "Magic Defense", value: "+4.0/level", note: "Stabil & Linear" },
                    { stat: "Attack Speed", value: "+0.02/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.6/level", note: "Bagus untuk sustain" }
                ],
                conclusion: ["+207 HP", "+6.8 Physical ATK", "+6.0 Physical Defense", "+4.0 Magic Defense", "+0.02 Attack Speed", "+0.6 HP Regen"]
            },
            fredrinn: {
                name: "Fredrinn", icon: "🛡️",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2600", "3620", "4895", "6170", false],
                        ["Physical ATK", "125", "158", "199", "240", true],
                        ["Physical Defense", "20", "43", "72", "101", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "1.06", "1.14", "1.24", "1.34", false],
                        ["HP Regen", "6.4", "8.8", "11.8", "14.8", false],
                        ["Movement SPD", "260", "260", "260", "260", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+255 HP/level", note: "Sangat Ekstrem" },
                    { stat: "Physical ATK Growth", value: "+8.2 ATK/level", note: "Konsisten" },
                    { stat: "Physical Defense", value: "+5.8/level", note: "Rata-rata +5.8" },
                    { stat: "Magic Defense", value: "+2.5/level", note: "Rata-rata +2.5" },
                    { stat: "Attack Speed", value: "+0.02/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.6/level", note: "Tepat +0.6" }
                ],
                conclusion: ["+255 HP", "+8.2 Physical ATK", "+5.8 Physical Defense", "+2.5 Magic Defense", "+0.02 Attack Speed", "+0.6 HP Regen"]
            },
            edith: {
                name: "Edith", icon: "🛡️",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2440", "3340", "4465", "5590", false],
                        ["Physical ATK", "110", "133", "161", "190", true],
                        ["Physical Defense", "17", "44", "78", "112", false],
                        ["Magic Defense", "15", "31", "51", "71", false],
                        ["Attack Speed", "0.94", "0.94", "0.94", "0.94", false],
                        ["HP Regen", "9.0", "11.4", "14.4", "17.4", false],
                        ["Movement SPD", "255", "255", "255", "255", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+225 HP/level", note: "Sangat Tinggi (Tanky)" },
                    { stat: "Physical ATK Growth", value: "+5.75 ATK/level", note: "Moderat" },
                    { stat: "Physical Defense", value: "+6.8/level", note: "Sangat Tinggi" },
                    { stat: "Magic Defense", value: "+4.0/level", note: "Tepat +4" },
                    { stat: "Attack Speed", value: "0/level", note: "Tidak Bertambah" },
                    { stat: "HP Regen", value: "+0.6/level", note: "Sangat Konsisten" }
                ],
                conclusion: ["+225 HP", "+5.75 Physical ATK", "+6.8 Physical Defense", "+4.0 Magic Defense", "0 Attack Speed (Fixed Base)", "+0.6 HP Regen"]
            },
            barats: {
                name: "Barats", icon: "👹",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2450", "3426", "4646", "5866", false],
                        ["Physical ATK", "135", "155", "181", "207", true],
                        ["Physical Defense", "23", "47", "77", "107", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "1.01", "1.05", "1.10", "1.15", false],
                        ["HP Regen", "8.8", "11.2", "14.2", "17.2", false],
                        ["Movement SPD", "268", "268", "268", "268", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+244 HP/level", note: "Sangat Tinggi & Stabil" },
                    { stat: "Physical ATK Growth", value: "+5.1 ATK/level", note: "Konsisten" },
                    { stat: "Physical Defense", value: "+6.0/level", note: "Tepat +6.0" },
                    { stat: "Magic Defense", value: "+2.5/level", note: "Rata-rata +2.5" },
                    { stat: "Attack Speed", value: "+0.01/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.6/level", note: "Tepat +0.6" }
                ],
                conclusion: ["+244 HP", "+5.1 Physical ATK", "+6.0 Physical Defense", "+2.5 Magic Defense", "+0.01 Attack Speed", "+0.6 HP Regen"]
            },
            terizla: {
                name: "Terizla", icon: "🛡️",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2619", "3539", "4689", "5839", false],
                        ["Physical ATK", "129", "180", "243", "307", true],
                        ["Physical Defense", "19", "48", "85", "122", false],
                        ["Magic Defense", "15", "31", "51", "71", false],
                        ["Attack Speed", "1.00", "1.00", "1.00", "1.00", false],
                        ["HP Regen", "10.8", "12.6", "15.2", "17.6", false],
                        ["Movement SPD", "255", "255", "255", "255", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+230 HP/level", note: "Sangat Tinggi & Stabil" },
                    { stat: "Physical ATK Growth", value: "+12.7 ATK/level", note: "Tinggi" },
                    { stat: "Physical Defense", value: "+7.4/level", note: "Sangat Tinggi" },
                    { stat: "Magic Defense", value: "+4.0/level", note: "Stabil" },
                    { stat: "Attack Speed", value: "0.00/level", note: "Statis (Tidak Bertambah)" },
                    { stat: "HP Regen", value: "+0.49/level", note: "Rata-rata +0.49" }
                ],
                conclusion: ["+230 HP", "+12.7 Physical ATK", "+7.4 Physical Defense", "+4.0 Magic Defense", "0.00 Attack Speed (Statis)", "+0.49 HP Regen"]
            },
            esmeralda: {
                name: "Esmeralda", icon: "💎",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2464", "3290", "4322", "5355", false],
                        ["Physical ATK", "114", "136", "163", "191", true],
                        ["Physical Defense", "21", "46", "77", "109", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "1.00", "1.04", "1.09", "1.14", false],
                        ["HP Regen", "7.2", "8.4", "9.8", "11.4", false],
                        ["Mana", "500", "900", "1400", "1900", false],
                        ["Mana Regen", "4.0", "4.8", "5.8", "6.8", false],
                        ["Movement SPD", "240", "240", "240", "240", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+206 HP/level", note: "Stabil & Linear" },
                    { stat: "Physical ATK Growth", value: "+5.5 ATK/level", note: "Konsisten" },
                    { stat: "Physical Defense", value: "+6.3/level", note: "Rata-rata (Tinggi)" },
                    { stat: "Magic Defense", value: "+2.5/level", note: "Rata-rata" },
                    { stat: "Attack Speed", value: "+0.01/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.3/level", note: "Rata-rata" },
                    { stat: "Mana", value: "+100/level", note: "Tepat +100" },
                    { stat: "Mana Regen", value: "+0.2/level", note: "Tepat +0.2" }
                ],
                conclusion: ["+206 HP", "+5.5 Physical ATK", "+6.3 Physical Defense", "+2.5 Magic Defense", "+0.01 Attack Speed", "+0.3 HP Regen", "+100 Mana", "+0.2 Mana Regen"]
            },
            grock: {
                name: "Grock", icon: "🗿",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2819", "3779", "4979", "6179", false],
                        ["Physical ATK", "135", "168", "209", "250", true],
                        ["Physical Defense", "21", "41", "113", "156", false],
                        ["Magic Defense", "15", "31", "51", "71", false],
                        ["Attack Speed", "1.01", "1.05", "1.10", "1.15", false],
                        ["HP Regen", "8.4", "10.8", "13.8", "16.8", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+240 HP/level", note: "Pertumbuhan Tertinggi" },
                    { stat: "Physical ATK Growth", value: "~8.2 ATK/level", note: "Pertumbuhan Damage Tinggi" },
                    { stat: "Physical Defense", value: "~9.6/level", note: "Pertumbuhan Pertahanan Luar Biasa" },
                    { stat: "Magic Defense", value: "+4/level", note: "Pertumbuhan Sangat Baik" },
                    { stat: "Attack Speed", value: "+0.01/level", note: "Peningkatan Stabil" },
                    { stat: "HP Regen", value: "+0.6/level", note: "Sustain Luar Biasa" }
                ],
                conclusion: ["+240 HP - Pertumbuhan HP tertinggi di antara semua hero yang dianalisis.", "~8.2 Physical ATK - Pertumbuhan damage yang tinggi untuk seorang tank.", "~9.6 Physical Defense - Pertumbuhan pertahanan fisik yang luar biasa tinggi.", "+4 Magic Defense - Pertumbuhan defensif magis yang sangat baik.", "+0.01 Attack Speed - Peningkatan kecepatan serang yang stabil.", "+0.6 HP Regen - Pertumbuhan regenerasi HP tertinggi."]
            },
            gatotkaca: {
                name: "Gatotkaca", icon: "🔥",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2520", "3420", "4545", "5670", false],
                        ["Physical ATK", "128", "156", "192", "228", true],
                        ["Physical Defense", "10", "35", "67", "99", false],
                        ["Magic Defense", "15", "31", "51", "71", false],
                        ["Attack Speed", "1.02", "1.08", "1.15", "1.23", false],
                        ["HP Regen", "8.4", "10.8", "13.8", "16.8", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+225 HP/level", note: "Pertumbuhan Sangat Tinggi" },
                    { stat: "Physical ATK Growth", value: "+7.1 ATK/level", note: "Pertumbuhan Damage Baik" },
                    { stat: "Physical Defense", value: "+6.4/level", note: "Pertahanan Fisik Luar Biasa" },
                    { stat: "Magic Defense", value: "+4/level", note: "Pertahanan Magis Sangat Baik" },
                    { stat: "Attack Speed", value: "+0.015/level", note: "Peningkatan Stabil" },
                    { stat: "HP Regen", value: "+0.6/level", note: "Sustain Luar Biasa" }
                ],
                conclusion: ["+225 HP - Durability masif sebagai tank.", "+7.1 Physical ATK - Damage scaling baik.", "+6.4 Physical Defense - Sangat tangguh.", "+4 Magic Defense - Pertahanan magis kuat.", "+0.015 Attack Speed - Stabil.", "+0.6 HP Regen - Sustain luar biasa."]
            },
            hilda: {
                name: "Hilda", icon: "🌲",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2680", "3700", "4975", "6250", false],
                        ["Physical ATK", "123", "150", "184", "218", true],
                        ["Physical Defense", "24", "52", "88", "124", false],
                        ["Magic Defense", "15", "31", "51", "71", false],
                        ["Attack Speed", "1.05", "1.13", "1.23", "1.33", false],
                        ["HP Regen", "8.4", "10.8", "14.0", "17.2", false],
                        ["Movement SPD", "260", "260", "260", "260", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+255 HP/level", note: "Sangat Ekstrem (Highest)" },
                    { stat: "Physical ATK Growth", value: "+6.8 ATK/level", note: "Standar" },
                    { stat: "Physical Defense", value: "+7.1/level", note: "Sangat Tinggi (Tanky)" },
                    { stat: "Magic Defense", value: "+4.0/level", note: "Tepat +4.0" },
                    { stat: "Attack Speed", value: "+0.02/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.63/level", note: "Rata-rata +0.63" }
                ],
                conclusion: ["+255 HP (Highest Growth)", "+6.8 Physical ATK", "+7.1 Physical Defense", "+4.0 Magic Defense", "+0.02 Attack Speed", "+0.63 HP Regen"]
            },
            alice: {
                name: "Alice", icon: "🩸",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2452", "3180", "4090", "5000", false],
                        ["Physical ATK", "114", "136", "163", "191", true],
                        ["Physical Defense", "25", "41", "61", "81", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "1.00", "1.10", "1.22", "1.35", false],
                        ["HP Regen", "7.2", "8.4", "9.8", "11.4", false],
                        ["Mana", "0", "0", "0", "0", false],
                        ["Mana Regen", "0", "0", "0", "0", false],
                        ["Movement SPD", "240", "240", "240", "240", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+182 HP/level", note: "Stabil & Linear" },
                    { stat: "Physical ATK Growth", value: "+5.5 ATK/level", note: "Konsisten" },
                    { stat: "Physical Defense", value: "+4.0/level", note: "Tepat +4.0" },
                    { stat: "Magic Defense", value: "+2.5/level", note: "Rata-rata" },
                    { stat: "Attack Speed", value: "+0.025/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.3/level", note: "Rata-rata" },
                    { stat: "Mana", value: "0/level", note: "Alice tidak menggunakan Mana" },
                    { stat: "Mana Regen", value: "0/level", note: "Tidak berlaku" }
                ],
                conclusion: ["+182 HP", "+5.5 Physical ATK", "+4.0 Physical Defense", "+2.5 Magic Defense", "+0.025 Attack Speed", "+0.3 HP Regen", "Mana & Mana Regen: 0 (Hero tanpa Mana)"]
            }
        },            
          fighter: {
                        kalea: {
                name: "Kalea", icon: "🧜‍♀️",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2500", "3460", "4660", "5860", false],
                        ["Physical ATK", "126", "163", "209", "255", true],
                        ["Physical Defense", "18", "40", "67", "95", false],
                        ["Magic Defense", "15", "31", "51", "71", false],
                        ["Attack Speed", "1.14", "1.22", "1.32", "1.42", false],
                        ["HP Regen", "7.8", "10.2", "13.2", "16.2", false],
                        ["Movement SPD", "260", "260", "260", "260", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+240 HP/level", note: "Sangat Tinggi & Stabil" },
                    { stat: "Physical ATK Growth", value: "+9.2 ATK/level", note: "Konsisten" },
                    { stat: "Physical Defense", value: "+5.5/level", note: "Rata-rata +5.5" },
                    { stat: "Magic Defense", value: "+4.0/level", note: "Tepat +4.0" },
                    { stat: "Attack Speed", value: "+0.02/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.6/level", note: "Rata-rata +0.6" }
                ],
                conclusion: ["+240 HP", "+9.2 Physical ATK", "+5.5 Physical Defense", "+4.0 Magic Defense", "+0.02 Attack Speed", "+0.6 HP Regen"]
            },
            lukas: {
                name: "Lukas", icon: "⚔️",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2550", "3358", "4368", "5378", false],
                        ["Physical ATK", "119", "156", "202", "248", true],
                        ["Physical Defense", "21", "38", "61", "83", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "1.00", "1.04", "1.09", "1.14", false],
                        ["HP Regen", "8.0", "9.8", "12.0", "14.2", false],
                        ["Movement SPD", "260", "260", "260", "260", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+202 HP/level", note: "Tinggi & Stabil" },
                    { stat: "Physical ATK Growth", value: "+9.2 ATK/level", note: "Konsisten" },
                    { stat: "Physical Defense", value: "+4.4/level", note: "Rata-rata +4.4" },
                    { stat: "Magic Defense", value: "+2.5/level", note: "Rata-rata +2.5" },
                    { stat: "Attack Speed", value: "+0.01/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.44/level", note: "Rata-rata +0.44" }
                ],
                conclusion: ["+202 HP", "+9.2 Physical ATK", "+4.4 Physical Defense", "+2.5 Magic Defense", "+0.01 Attack Speed", "+0.44 HP Regen"]
            },
            cici: {
                name: "Cici", icon: "🧚‍♀️",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2431", "3211", "4186", "5161", false],
                        ["Physical ATK", "129", "156", "191", "226", true],
                        ["Physical Defense", "23", "39", "59", "79", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "1.07", "1.15", "1.25", "1.35", false],
                        ["HP Regen", "6.0", "8.2", "11.0", "14.0", false],
                        ["Movement SPD", "250", "250", "250", "250", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+195 HP/level", note: "Sangat Tinggi & Stabil" },
                    { stat: "Physical ATK Growth", value: "+6.9 ATK/level", note: "Konsisten" },
                    { stat: "Physical Defense", value: "+4.0/level", note: "Tepat +4.0" },
                    { stat: "Magic Defense", value: "+2.5/level", note: "Tepat +2.5" },
                    { stat: "Attack Speed", value: "+0.02/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.57/level", note: "Rata-rata +0.57" }
                ],
                conclusion: ["+195 HP", "+6.9 Physical ATK", "+4.0 Physical Defense", "+2.5 Magic Defense", "+0.02 Attack Speed", "+0.57 HP Regen"]
            },
            fredrinn: {
                name: "Fredrinn", icon: "🛡️",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2600", "3620", "4895", "6170", false],
                        ["Physical ATK", "125", "158", "199", "240", true],
                        ["Physical Defense", "20", "43", "72", "101", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "1.06", "1.14", "1.24", "1.34", false],
                        ["HP Regen", "6.4", "8.8", "11.8", "14.8", false],
                        ["Movement SPD", "260", "260", "260", "260", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+255 HP/level", note: "Sangat Ekstrem" },
                    { stat: "Physical ATK Growth", value: "+8.2 ATK/level", note: "Konsisten" },
                    { stat: "Physical Defense", value: "+5.8/level", note: "Rata-rata +5.8" },
                    { stat: "Magic Defense", value: "+2.5/level", note: "Rata-rata +2.5" },
                    { stat: "Attack Speed", value: "+0.02/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.6/level", note: "Tepat +0.6" }
                ],
                conclusion: ["+255 HP", "+8.2 Physical ATK", "+5.8 Physical Defense", "+2.5 Magic Defense", "+0.02 Attack Speed", "+0.6 HP Regen"]
            },
            aulus: {
                name: "Aulus", icon: "🦁",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2580", "3460", "4560", "5660", false],
                        ["Physical ATK", "90", "141", "204", "268", true],
                        ["Physical Defense", "24", "41", "63", "85", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "0.92", "0.98", "1.05", "1.13", false],
                        ["HP Regen", "10.2", "12.0", "14.2", "16.6", false],
                        ["Movement SPD", "255", "255", "255", "255", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+220 HP/level", note: "Sangat Stabil & Linear" },
                    { stat: "Physical ATK Growth", value: "+12.7 ATK/level", note: "Sangat Tinggi" },
                    { stat: "Physical Defense", value: "+4.35/level", note: "Rata-rata +4.35" },
                    { stat: "Magic Defense", value: "+2.5/level", note: "Rata-rata +2.5" },
                    { stat: "Attack Speed", value: "+0.015/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.45/level", note: "Rata-rata +0.45" }
                ],
                conclusion: ["+220 HP", "+12.7 Physical ATK", "+4.35 Physical Defense", "+2.5 Magic Defense", "+0.015 Attack Speed", "+0.45 HP Regen"]
            },
            phoveus: {
                name: "Phoveus", icon: "🗡️",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2650", "3530", "4630", "5730", false],
                        ["Physical ATK", "132", "163", "201", "240", true],
                        ["Physical Defense", "25", "42", "65", "87", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "1.02", "1.06", "1.11", "1.16", false],
                        ["HP Regen", "10.8", "12.6", "15.2", "17.6", false],
                        ["Movement SPD", "252", "252", "252", "252", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+220 HP/level", note: "Sangat Stabil & Linear" },
                    { stat: "Physical ATK Growth", value: "+7.7 ATK/level", note: "Konsisten" },
                    { stat: "Physical Defense", value: "+4.4/level", note: "Rata-rata +4.4" },
                    { stat: "Magic Defense", value: "+2.5/level", note: "Tepat +2.5" },
                    { stat: "Attack Speed", value: "+0.01/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.48/level", note: "Rata-rata +0.48" }
                ],
                conclusion: ["+220 HP", "+7.7 Physical ATK", "+4.4 Physical Defense", "+2.5 Magic Defense", "+0.01 Attack Speed", "+0.48 HP Regen"]
            },
            barats: {
                name: "Barats", icon: "👹",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2450", "3426", "4646", "5866", false],
                        ["Physical ATK", "135", "155", "181", "207", true],
                        ["Physical Defense", "23", "47", "77", "107", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "1.01", "1.05", "1.10", "1.15", false],
                        ["HP Regen", "8.8", "11.2", "14.2", "17.2", false],
                        ["Movement SPD", "268", "268", "268", "268", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+244 HP/level", note: "Sangat Tinggi & Stabil" },
                    { stat: "Physical ATK Growth", value: "+5.1 ATK/level", note: "Konsisten" },
                    { stat: "Physical Defense", value: "+6.0/level", note: "Tepat +6.0" },
                    { stat: "Magic Defense", value: "+2.5/level", note: "Rata-rata +2.5" },
                    { stat: "Attack Speed", value: "+0.01/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.6/level", note: "Tepat +0.6" }
                ],
                conclusion: ["+244 HP", "+5.1 Physical ATK", "+6.0 Physical Defense", "+2.5 Magic Defense", "+0.01 Attack Speed", "+0.6 HP Regen"]
            },
            khaleed: {
                name: "Khaleed", icon: "⚔️",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2600", "3500", "4625", "5750", false],
                        ["Physical ATK", "109", "147", "194", "242", true],
                        ["Physical Defense", "23", "41", "64", "87", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "1.05", "1.11", "1.18", "1.26", false],
                        ["HP Regen", "7.0", "8.8", "11.0", "13.2", false],
                        ["Movement SPD", "250", "250", "250", "250", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+225 HP/level", note: "Sangat Tinggi & Stabil" },
                    { stat: "Physical ATK Growth", value: "+9.5 ATK/level", note: "Konsisten" },
                    { stat: "Physical Defense", value: "+4.5/level", note: "Rata-rata +4.5" },
                    { stat: "Magic Defense", value: "+2.5/level", note: "Rata-rata +2.5" },
                    { stat: "Attack Speed", value: "+0.015/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.44/level", note: "Rata-rata +0.44" }
                ],
                conclusion: ["+225 HP", "+9.5 Physical ATK", "+4.5 Physical Defense", "+2.5 Magic Defense", "+0.015 Attack Speed", "+0.44 HP Regen"]
            },
            yuzhong: {
                name: "Yu Zhong", icon: "🐉",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2520", "3360", "4410", "5460", false],
                        ["Physical ATK", "129", "176", "234", "293", true],
                        ["Physical Defense", "21", "39", "61", "84", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "1.00", "1.04", "1.09", "1.14", false],
                        ["HP Regen", "11.8", "13.6", "16.2", "18.6", false],
                        ["Movement SPD", "245", "245", "245", "245", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+210 HP/level", note: "Sangat Tinggi & Stabil" },
                    { stat: "Physical ATK Growth", value: "+11.7 ATK/level", note: "Tinggi" },
                    { stat: "Physical Defense", value: "+4.5/level", note: "Tepat +4.5" },
                    { stat: "Magic Defense", value: "+2.5/level", note: "Rata-rata +2.5" },
                    { stat: "Attack Speed", value: "+0.01/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.49/level", note: "Rata-rata +0.49" }
                ],
                conclusion: ["+210 HP", "+11.7 Physical ATK", "+4.5 Physical Defense", "+2.5 Magic Defense", "+0.01 Attack Speed", "+0.49 HP Regen"]
            },
            silvanna: {
                name: "Silvanna", icon: "👑",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2650", "3498", "4558", "5618", false],
                        ["Physical ATK", "126", "163", "209", "255", true],
                        ["Physical Defense", "22", "40", "62", "85", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "1.14", "1.26", "1.41", "1.56", false],
                        ["HP Regen", "7.8", "9.4", "11.8", "14.0", false],
                        ["Movement SPD", "255", "255", "255", "255", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+212 HP/level", note: "Sangat Tinggi & Stabil" },
                    { stat: "Physical ATK Growth", value: "+9.2 ATK/level", note: "Konsisten" },
                    { stat: "Physical Defense", value: "+4.5/level", note: "Rata-rata +4.5" },
                    { stat: "Magic Defense", value: "+2.5/level", note: "Rata-rata +2.5" },
                    { stat: "Attack Speed", value: "+0.03/level", note: "Sangat Bagus" },
                    { stat: "HP Regen", value: "+0.44/level", note: "Rata-rata +0.44" }
                ],
                conclusion: ["+212 HP", "+9.2 Physical ATK", "+4.5 Physical Defense", "+2.5 Magic Defense", "+0.03 Attack Speed", "+0.44 HP Regen"]
            },
            masha: {
                name: "Masha", icon: "🐻",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2000", "2320", "2720", "3120", false],
                        ["Physical ATK", "90", "129", "177", "226", true],
                        ["Physical Defense", "15", "30", "49", "68", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "0.96", "1.10", "1.27", "1.45", false],
                        ["HP Regen", "3.8", "5.6", "7.8", "10.0", false],
                        ["Movement SPD", "250", "250", "250", "250", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+80 HP/level", note: "Rendah (Low Base HP)" },
                    { stat: "Physical ATK Growth", value: "+9.7 ATK/level", note: "Tinggi" },
                    { stat: "Physical Defense", value: "+3.8/level", note: "Rata-rata +3.8" },
                    { stat: "Magic Defense", value: "+2.5/level", note: "Rata-rata +2.5" },
                    { stat: "Attack Speed", value: "+0.035/level", note: "Sangat Bagus" },
                    { stat: "HP Regen", value: "+0.44/level", note: "Rata-rata +0.44" }
                ],
                conclusion: ["+80 HP", "+9.7 Physical ATK", "+3.8 Physical Defense", "+2.5 Magic Defense", "+0.035 Attack Speed", "+0.44 HP Regen"]
            },
            dyrroth: {
                name: "Dyrroth", icon: "⚔️",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2580", "3500", "4650", "5800", false],
                        ["Physical ATK", "117", "159", "212", "266", true],
                        ["Physical Defense", "22", "40", "64", "87", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "1.14", "1.26", "1.41", "1.56", false],
                        ["HP Regen", "8.2", "10.0", "12.6", "15.0", false],
                        ["Movement SPD", "265", "265", "265", "265", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+230 HP/level", note: "Sangat Tinggi & Stabil" },
                    { stat: "Physical ATK Growth", value: "+10.6 ATK/level", note: "Tinggi" },
                    { stat: "Physical Defense", value: "+4.6/level", note: "Rata-rata +4.6" },
                    { stat: "Magic Defense", value: "+2.5/level", note: "Rata-rata +2.5" },
                    { stat: "Attack Speed", value: "+0.03/level", note: "Sangat Bagus" },
                    { stat: "HP Regen", value: "+0.49/level", note: "Rata-rata +0.49" }
                ],
                conclusion: ["+230 HP", "+10.6 Physical ATK", "+4.6 Physical Defense", "+2.5 Magic Defense", "+0.03 Attack Speed", "+0.49 HP Regen"]
            },
            xborg: {
                name: "X.Borg", icon: "🔥",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "917", "1383", "1965", "2548", false],
                        ["Armor HP", "1467", "1933", "2515", "3098", false],
                        ["Physical ATK", "117", "150", "191", "232", true],
                        ["Physical Defense", "25", "43", "67", "90", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "1.08", "1.12", "1.17", "1.22", false],
                        ["HP Regen", "7.8", "9.4", "11.4", "13.6", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+116 HP/level", note: "Stabil" },
                    { stat: "Armor HP Growth", value: "+116 Armor/level", note: "Stabil (Total +232 HP)" },
                    { stat: "Physical ATK Growth", value: "+8.2 ATK/level", note: "Konsisten" },
                    { stat: "Physical Defense", value: "+4.6/level", note: "Rata-rata +4.6" },
                    { stat: "Magic Defense", value: "+2.5/level", note: "Rata-rata +2.5" },
                    { stat: "Attack Speed", value: "+0.01/level", note: "Stabil" }
                ],
                conclusion: ["+116 HP (Asli)", "+116 Armor HP", "+8.2 Physical ATK", "+4.6 Physical Defense", "+2.5 Magic Defense", "+0.01 Attack Speed"]
            },
            terizla: {
                name: "Terizla", icon: "🛡️",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2619", "3539", "4689", "5839", false],
                        ["Physical ATK", "129", "180", "243", "307", true],
                        ["Physical Defense", "19", "48", "85", "122", false],
                        ["Magic Defense", "15", "31", "51", "71", false],
                        ["Attack Speed", "1.00", "1.00", "1.00", "1.00", false],
                        ["HP Regen", "10.8", "12.6", "15.2", "17.6", false],
                        ["Movement SPD", "255", "255", "255", "255", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+230 HP/level", note: "Sangat Tinggi & Stabil" },
                    { stat: "Physical ATK Growth", value: "+12.7 ATK/level", note: "Tinggi" },
                    { stat: "Physical Defense", value: "+7.4/level", note: "Sangat Tinggi" },
                    { stat: "Magic Defense", value: "+4.0/level", note: "Stabil" },
                    { stat: "Attack Speed", value: "0.00/level", note: "Statis (Tidak Bertambah)" },
                    { stat: "HP Regen", value: "+0.49/level", note: "Rata-rata +0.49" }
                ],
                conclusion: ["+230 HP", "+12.7 Physical ATK", "+7.4 Physical Defense", "+4.0 Magic Defense", "0.00 Attack Speed (Statis)", "+0.49 HP Regen"]
            },
            kaja: {
                name: "Kaja", icon: "⚡",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2431", "3331", "4456", "5581", false],
                        ["Physical ATK", "120", "148", "183", "218", true],
                        ["Physical Defense", "25", "41", "62", "83", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "1.05", "1.13", "1.23", "1.33", false],
                        ["HP Regen", "10.4", "12.8", "15.8", "18.8", false],
                        ["Movement SPD", "270", "270", "270", "270", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+225 HP/level", note: "Sangat Tinggi & Stabil" },
                    { stat: "Physical ATK Growth", value: "+7.0 ATK/level", note: "Konsisten" },
                    { stat: "Physical Defense", value: "+4.1/level", note: "Rata-rata +4.1" },
                    { stat: "Magic Defense", value: "+2.5/level", note: "Rata-rata +2.5" },
                    { stat: "Attack Speed", value: "+0.02/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.6/level", note: "Tepat +0.6" }
                ],
                conclusion: ["+225 HP", "+7.0 Physical ATK", "+4.1 Physical Defense", "+2.5 Magic Defense", "+0.02 Attack Speed", "+0.6 HP Regen"]
            },
            aldous: {
                name: "Aldous", icon: "🥊",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2490", "3310", "4335", "5360", false],
                        ["Physical ATK", "129", "172", "225", "279", true],
                        ["Physical Defense", "21", "39", "61", "84", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "1.04", "1.08", "1.13", "1.18", false],
                        ["HP Regen", "9.8", "11.6", "14.2", "16.6", false],
                        ["Movement SPD", "260", "260", "260", "260", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+205 HP/level", note: "Sangat Stabil" },
                    { stat: "Physical ATK Growth", value: "+10.7 ATK/level", note: "Sangat Tinggi" },
                    { stat: "Physical Defense", value: "+4.5/level", note: "Rata-rata +4.5" },
                    { stat: "Magic Defense", value: "+2.5/level", note: "Rata-rata +2.5" },
                    { stat: "Attack Speed", value: "+0.01/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.48/level", note: "Rata-rata +0.48" }
                ],
                conclusion: ["+205 HP", "+10.7 Physical ATK", "+4.5 Physical Defense", "+2.5 Magic Defense", "+0.01 Attack Speed", "+0.48 HP Regen"]
            },
            leomord: {
                name: "Leomord", icon: "🐴",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2560", "3480", "4630", "5780", false],
                        ["Physical ATK", "126", "167", "218", "269", true],
                        ["Physical Defense", "21", "39", "62", "85", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "1.05", "1.11", "1.18", "1.26", false],
                        ["HP Regen", "7.0", "8.8", "11.0", "13.2", false],
                        ["Movement SPD", "240", "240", "240", "240", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+230 HP/level", note: "Sangat Tinggi & Stabil" },
                    { stat: "Physical ATK Growth", value: "+10.2 ATK/level", note: "Tinggi" },
                    { stat: "Physical Defense", value: "+4.6/level", note: "Rata-rata +4.6" },
                    { stat: "Magic Defense", value: "+2.5/level", note: "Rata-rata +2.5" },
                    { stat: "Attack Speed", value: "+0.015/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.44/level", note: "Rata-rata +0.44" }
                ],
                conclusion: ["+230 HP", "+10.2 Physical ATK", "+4.6 Physical Defense", "+2.5 Magic Defense", "+0.015 Attack Speed", "+0.44 HP Regen"]
            },
            thamuz: {
                name: "Thamuz", icon: "🔥",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2580", "3492", "4632", "5772", false],
                        ["Physical ATK", "107", "140", "181", "222", true],
                        ["Physical Defense", "17", "35", "57", "80", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "1.05", "1.11", "1.18", "1.26", false],
                        ["HP Regen", "7.4", "9.0", "11.0", "13.0", false],
                        ["Movement SPD", "250", "250", "250", "250", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+228 HP/level", note: "Sangat Tinggi & Stabil" },
                    { stat: "Physical ATK Growth", value: "+8.2 ATK/level", note: "Konsisten" },
                    { stat: "Physical Defense", value: "+4.5/level", note: "Rata-rata +4.5" },
                    { stat: "Magic Defense", value: "+2.5/level", note: "Rata-rata +2.5" },
                    { stat: "Attack Speed", value: "+0.015/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.4/level", note: "Tepat +0.4" }
                ],
                conclusion: ["+228 HP", "+8.2 Physical ATK", "+4.5 Physical Defense", "+2.5 Magic Defense", "+0.015 Attack Speed", "+0.4 HP Regen"]
            },
            minsitthar: {
                name: "Minsitthar", icon: "🛡️",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2520", "3372", "4437", "5502", false],
                        ["Physical ATK", "121", "158", "204", "250", true],
                        ["Physical Defense", "23", "41", "64", "87", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "1.06", "1.18", "1.33", "1.48", false],
                        ["HP Regen", "7.4", "9.0", "11.2", "13.2", false],
                        ["Movement SPD", "260", "260", "260", "260", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+213 HP/level", note: "Sangat Tinggi & Stabil" },
                    { stat: "Physical ATK Growth", value: "+9.2 ATK/level", note: "Konsisten" },
                    { stat: "Physical Defense", value: "+4.6/level", note: "Rata-rata +4.6" },
                    { stat: "Magic Defense", value: "+2.5/level", note: "Rata-rata +2.5" },
                    { stat: "Attack Speed", value: "+0.03/level", note: "Sangat Bagus" },
                    { stat: "HP Regen", value: "+0.41/level", note: "Rata-rata +0.41" }
                ],
                conclusion: ["+213 HP", "+9.2 Physical ATK", "+4.6 Physical Defense", "+2.5 Magic Defense", "+0.03 Attack Speed", "+0.41 HP Regen"]
            },
            badang: {
                name: "Badang", icon: "💪",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2530", "3470", "4645", "5820", false],
                        ["Physical ATK", "111", "149", "196", "244", true],
                        ["Physical Defense", "23", "41", "64", "87", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "1.13", "1.25", "1.40", "1.55", false],
                        ["HP Regen", "8.0", "9.6", "11.8", "13.8", false],
                        ["Movement SPD", "255", "255", "255", "255", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+235 HP/level", note: "Sangat Tinggi & Stabil" },
                    { stat: "Physical ATK Growth", value: "+9.5 ATK/level", note: "Konsisten" },
                    { stat: "Physical Defense", value: "+4.6/level", note: "Rata-rata +4.6" },
                    { stat: "Magic Defense", value: "+2.5/level", note: "Rata-rata +2.5" },
                    { stat: "Attack Speed", value: "+0.03/level", note: "Sangat Bagus" },
                    { stat: "HP Regen", value: "+0.41/level", note: "Rata-rata +0.41" }
                ],
                conclusion: ["+235 HP", "+9.5 Physical ATK", "+4.6 Physical Defense", "+2.5 Magic Defense", "+0.03 Attack Speed", "+0.41 HP Regen"]
            },
            guinevere: {
                name: "Guinevere", icon: "🧚‍♀️",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2350", "3198", "4258", "5318", false],
                        ["Physical ATK", "126", "163", "209", "255", true],
                        ["Physical Defense", "18", "36", "58", "81", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "1.14", "1.26", "1.41", "1.56", false],
                        ["HP Regen", "7.8", "9.4", "11.8", "14.0", false],
                        ["Movement SPD", "260", "260", "260", "260", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+212 HP/level", note: "Sangat Tinggi & Stabil" },
                    { stat: "Physical ATK Growth", value: "+9.2 ATK/level", note: "Konsisten" },
                    { stat: "Physical Defense", value: "+4.5/level", note: "Rata-rata +4.5" },
                    { stat: "Magic Defense", value: "+2.5/level", note: "Rata-rata +2.5" },
                    { stat: "Attack Speed", value: "+0.03/level", note: "Sangat Bagus" },
                    { stat: "HP Regen", value: "+0.44/level", note: "Rata-rata +0.44" }
                ],
                conclusion: ["+212 HP", "+9.2 Physical ATK", "+4.5 Physical Defense", "+2.5 Magic Defense", "+0.03 Attack Speed", "+0.44 HP Regen"]
            },
            lapulapu: {
                name: "Lapu-Lapu", icon: "⚔️",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2450", "3363", "4504", "5646", false],
                        ["Physical ATK", "119", "152", "193", "234", true],
                        ["Physical Defense", "21", "39", "61", "84", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "1.12", "1.20", "1.30", "1.40", false],
                        ["HP Regen", "7.0", "8.6", "10.6", "12.6", false],
                        ["Movement SPD", "260", "260", "260", "260", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+228 HP/level", note: "Sangat Tinggi & Stabil" },
                    { stat: "Physical ATK Growth", value: "+8.2 ATK/level", note: "Konsisten" },
                    { stat: "Physical Defense", value: "+4.5/level", note: "Rata-rata +4.5" },
                    { stat: "Magic Defense", value: "+2.5/level", note: "Rata-rata +2.5" },
                    { stat: "Attack Speed", value: "+0.02/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.4/level", note: "Tepat +0.4" }
                ],
                conclusion: ["+228 HP", "+8.2 Physical ATK", "+4.5 Physical Defense", "+2.5 Magic Defense", "+0.02 Attack Speed", "+0.4 HP Regen"]
            },
            argus: {
                name: "Argus", icon: "👿",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2450", "3242", "4232", "5222", false],
                        ["Physical ATK", "111", "135", "165", "195", true],
                        ["Physical Defense", "21", "37", "57", "78", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "1.09", "1.13", "1.18", "1.23", false],
                        ["HP Regen", "8.0", "9.6", "11.6", "13.6", false],
                        ["Movement SPD", "260", "260", "260", "260", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+198 HP/level", note: "Stabil" },
                    { stat: "Physical ATK Growth", value: "+6.0 ATK/level", note: "Stabil" },
                    { stat: "Physical Defense", value: "+4.1/level", note: "Rata-rata +4.1" },
                    { stat: "Magic Defense", value: "+2.5/level", note: "Rata-rata +2.5" },
                    { stat: "Attack Speed", value: "+0.01/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.4/level", note: "Tepat +0.4" }
                ],
                conclusion: ["+198 HP", "+6.0 Physical ATK", "+4.1 Physical Defense", "+2.5 Magic Defense", "+0.01 Attack Speed", "+0.4 HP Regen"]
            },
            jawhead: {
                name: "Jawhead", icon: "🤖",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2480", "3432", "4622", "5812", false],
                        ["Physical ATK", "119", "152", "193", "234", true],
                        ["Physical Defense", "24", "42", "65", "88", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "1.12", "1.20", "1.30", "1.40", false],
                        ["HP Regen", "7.8", "9.8", "12.4", "15.0", false],
                        ["Movement SPD", "255", "255", "255", "255", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+238 HP/level", note: "Sangat Tinggi & Stabil" },
                    { stat: "Physical ATK Growth", value: "+8.2 ATK/level", note: "Konsisten" },
                    { stat: "Physical Defense", value: "+4.6/level", note: "Rata-rata +4.6" },
                    { stat: "Magic Defense", value: "+2.5/level", note: "Rata-rata +2.5" },
                    { stat: "Attack Speed", value: "+0.02/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.51/level", note: "Rata-rata +0.51" }
                ],
                conclusion: ["+238 HP", "+8.2 Physical ATK", "+4.6 Physical Defense", "+2.5 Magic Defense", "+0.02 Attack Speed", "+0.51 HP Regen"]
            },
            martis: {
                name: "Martis", icon: "⚔️",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2560", "3436", "4531", "5626", false],
                        ["Physical ATK", "128", "163", "206", "250", true],
                        ["Physical Defense", "25", "43", "66", "89", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "1.08", "1.18", "1.30", "1.43", false],
                        ["HP Regen", "7.0", "8.6", "10.6", "12.6", false],
                        ["Movement SPD", "260", "260", "260", "260", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+219 HP/level", note: "Sangat Tinggi & Stabil" },
                    { stat: "Physical ATK Growth", value: "+8.7 ATK/level", note: "Konsisten" },
                    { stat: "Physical Defense", value: "+4.6/level", note: "Rata-rata +4.6" },
                    { stat: "Magic Defense", value: "+2.5/level", note: "Rata-rata +2.5" },
                    { stat: "Attack Speed", value: "+0.025/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.4/level", note: "Tepat +0.4" }
                ],
                conclusion: ["+219 HP", "+8.7 Physical ATK", "+4.6 Physical Defense", "+2.5 Magic Defense", "+0.025 Attack Speed", "+0.4 HP Regen"]
            },
            hilda: {
                name: "Hilda", icon: "🌲",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2680", "3700", "4975", "6250", false],
                        ["Physical ATK", "123", "150", "184", "218", true],
                        ["Physical Defense", "24", "52", "88", "124", false],
                        ["Magic Defense", "15", "31", "51", "71", false],
                        ["Attack Speed", "1.05", "1.13", "1.23", "1.33", false],
                        ["HP Regen", "8.4", "10.8", "14.0", "17.2", false],
                        ["Movement SPD", "260", "260", "260", "260", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+255 HP/level", note: "Sangat Ekstrem (Highest)" },
                    { stat: "Physical ATK Growth", value: "+6.8 ATK/level", note: "Standar" },
                    { stat: "Physical Defense", value: "+7.1/level", note: "Sangat Tinggi (Tanky)" },
                    { stat: "Magic Defense", value: "+4.0/level", note: "Tepat +4.0" },
                    { stat: "Attack Speed", value: "+0.02/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.63/level", note: "Rata-rata +0.63" }
                ],
                conclusion: ["+255 HP (Highest Growth)", "+6.8 Physical ATK", "+7.1 Physical Defense", "+4.0 Magic Defense", "+0.02 Attack Speed", "+0.63 HP Regen"]
            },
            ruby: {
                name: "Ruby", icon: "🧣",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2331", "3071", "3996", "4921", false],
                        ["Physical ATK", "129", "156", "191", "226", true],
                        ["Physical Defense", "18", "34", "54", "74", false],
                        ["Magic Defense", "10", "20", "32", "45", false],
                        ["Attack Speed", "1.07", "1.15", "1.25", "1.35", false],
                        ["HP Regen", "6.0", "8.2", "11.0", "14.0", false],
                        ["Movement SPD", "260", "260", "260", "260", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+185 HP/level", note: "Sangat Tinggi & Stabil" },
                    { stat: "Physical ATK Growth", value: "+6.9 ATK/level", note: "Konsisten" },
                    { stat: "Physical Defense", value: "+4.0/level", note: "Rata-rata +4.0" },
                    { stat: "Magic Defense", value: "+2.5/level", note: "Rata-rata +2.5" },
                    { stat: "Attack Speed", value: "+0.02/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.57/level", note: "Rata-rata +0.57" }
                ],
                conclusion: ["+185 HP", "+6.9 Physical ATK", "+4.0 Physical Defense", "+2.5 Magic Defense", "+0.02 Attack Speed", "+0.57 HP Regen"]
            },
            alpha: {
                name: "Alpha", icon: "🤖",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2468", "3404", "4574", "5744", false],
                        ["Physical ATK", "121", "154", "196", "238", true],
                        ["Physical Defense", "25", "42", "64", "86", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "1.14", "1.26", "1.41", "1.56", false],
                        ["HP Regen", "7.8", "9.8", "12.4", "15.0", false],
                        ["Movement SPD", "260", "260", "260", "260", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+234 HP/level", note: "Sangat Tinggi & Stabil" },
                    { stat: "Physical ATK Growth", value: "+8.3 ATK/level", note: "Rata-rata +8.3" },
                    { stat: "Physical Defense", value: "+4.35/level", note: "Rata-rata +4.35" },
                    { stat: "Magic Defense", value: "+2.5/level", note: "Rata-rata +2.5" },
                    { stat: "Attack Speed", value: "+0.03/level", note: "Sangat Bagus" },
                    { stat: "HP Regen", value: "+0.5/level", note: "Rata-rata +0.5" }
                ],
                conclusion: ["+234 HP", "+8.3 Physical ATK", "+4.35 Physical Defense", "+2.5 Magic Defense", "+0.03 Attack Speed", "+0.5 HP Regen"]
            },
            sun: {
                name: "Sun", icon: "🐵",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2500", "3220", "4120", "5020", false],
                        ["Physical ATK", "114", "136", "163", "191", true],
                        ["Physical Defense", "23", "41", "63", "86", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "1.14", "1.22", "1.32", "1.42", false],
                        ["HP Regen", "8.2", "10.4", "13.0", "15.8", false],
                        ["Movement SPD", "260", "260", "260", "260", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+180 HP/level", note: "Sangat Stabil" },
                    { stat: "Physical ATK Growth", value: "+5.5 ATK/level", note: "Konsisten" },
                    { stat: "Physical Defense", value: "+4.5/level", note: "Tepat +4.5" },
                    { stat: "Magic Defense", value: "+2.5/level", note: "Rata-rata +2.5" },
                    { stat: "Attack Speed", value: "+0.02/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.54/level", note: "Rata-rata +0.54" }
                ],
                conclusion: ["+180 HP", "+5.5 Physical ATK", "+4.5 Physical Defense", "+2.5 Magic Defense", "+0.02 Attack Speed", "+0.54 HP Regen"]
            },
            chou: {
                name: "Chou", icon: "🥋",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2530", "3398", "4483", "5568", false],
                        ["Physical ATK", "121", "161", "211", "262", true],
                        ["Physical Defense", "23", "41", "64", "87", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "1.10", "1.20", "1.32", "1.45", false],
                        ["HP Regen", "7.8", "9.6", "11.8", "14.0", false],
                        ["Movement SPD", "260", "260", "260", "260", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+217 HP/level", note: "Sangat Tinggi & Stabil" },
                    { stat: "Physical ATK Growth", value: "+10.1 ATK/level", note: "Konsisten" },
                    { stat: "Physical Defense", value: "+4.6/level", note: "Rata-rata +4.6" },
                    { stat: "Magic Defense", value: "+2.5/level", note: "Rata-rata +2.5" },
                    { stat: "Attack Speed", value: "+0.025/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.44/level", note: "Rata-rata +0.44" }
                ],
                conclusion: ["+217 HP", "+10.1 Physical ATK", "+4.6 Physical Defense", "+2.5 Magic Defense", "+0.025 Attack Speed", "+0.44 HP Regen"]
            },
            freya: {
                name: "Freya", icon: "⚔️",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2550", "3410", "4485", "5560", false],
                        ["Physical ATK", "120", "155", "198", "242", true],
                        ["Physical Defense", "22", "39", "61", "83", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "1.00", "1.08", "1.18", "1.28", false],
                        ["HP Regen", "9.8", "11.6", "13.8", "16.2", false],
                        ["Movement SPD", "260", "260", "260", "260", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+215 HP/level", note: "Sangat Tinggi & Stabil" },
                    { stat: "Physical ATK Growth", value: "+8.7 ATK/level", note: "Konsisten" },
                    { stat: "Physical Defense", value: "+4.35/level", note: "Rata-rata +4.35" },
                    { stat: "Magic Defense", value: "+2.5/level", note: "Rata-rata +2.5" },
                    { stat: "Attack Speed", value: "+0.02/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.46/level", note: "Rata-rata +0.46" }
                ],
                conclusion: ["+215 HP", "+8.7 Physical ATK", "+4.35 Physical Defense", "+2.5 Magic Defense", "+0.02 Attack Speed", "+0.46 HP Regen"]
            },
            balmond: {
                name: "Balmond", icon: "🪓",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2558", "3602", "4907", "6212", false],
                        ["Physical ATK", "119", "152", "195", "237", true],
                        ["Physical Defense", "25", "43", "67", "90", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "1.06", "1.14", "1.24", "1.34", false],
                        ["HP Regen", "9.4", "11.8", "14.8", "17.8", false],
                        ["Movement SPD", "260", "260", "260", "260", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+261 HP/level", note: "Sangat Ekstrem (Highest)" },
                    { stat: "Physical ATK Growth", value: "+8.4 ATK/level", note: "Rata-rata +8.4" },
                    { stat: "Physical Defense", value: "+4.6/level", note: "Rata-rata +4.6" },
                    { stat: "Magic Defense", value: "+2.5/level", note: "Rata-rata +2.5" },
                    { stat: "Attack Speed", value: "+0.02/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.6/level", note: "Tepat +0.6" }
                ],
                conclusion: ["+261 HP (Highest Growth)", "+8.4 Physical ATK", "+4.6 Physical Defense", "+2.5 Magic Defense", "+0.02 Attack Speed", "+0.6 HP Regen"]
            },
            sora: {
                name: "Sora", icon: "⚔️",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2800", "3680", "4780", "5880", false],
                        ["Physical ATK", "145", "176", "214", "253", true],
                        ["Physical Defense", "25", "42", "65", "87", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "1.02", "1.06", "1.11", "1.16", false],
                        ["HP Regen", "10.8", "12.6", "15.2", "17.6", false],
                        ["Movement SPD", "291", "291", "291", "291", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+220 HP/level", note: "Stabil setelah lvl 5" },
                    { stat: "Physical ATK Growth", value: "+7.7 ATK/level", note: "Meningkat di late game" },
                    { stat: "Physical Defense", value: "+4.4/level", note: "Rata-rata tinggi" },
                    { stat: "Magic Defense", value: "+2.5/level", note: "Konsisten" },
                    { stat: "Attack Speed", value: "+0.01/level", note: "Stabil +0.05/5 level" },
                    { stat: "HP Regen", value: "+0.5/level", note: "Sustain baik" }
                ],
                conclusion: ["+220 HP (rata-rata, meningkat setelah lvl 5)", "+7.7 Physical ATK (scaling semakin baik)", "+4.4 Physical Defense (pertahanan solid)", "+2.5 Magic Defense (konsisten)", "+0.01 Attack Speed (stabil)", "+0.5 HP Regen (sustain excellent)"]
            },
            suyou: {
                name: "Suyou", icon: "🗡️",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2390", "3038", "3848", "4658", false],
                        ["Physical ATK", "124", "171", "230", "289", true],
                        ["Physical Defense", "16", "32", "52", "72", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "1.08", "1.16", "1.26", "1.36", false],
                        ["HP Regen", "7.0", "8.8", "11.0", "13.2", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "~162 HP/level", note: "Pertumbuhan Sangat Baik" },
                    { stat: "Physical ATK Growth", value: "~11.8 ATK/level", note: "Pertumbuhan Damage Luar Biasa" },
                    { stat: "Physical Defense", value: "+4/level", note: "Tahanan Fisik Kuat" },
                    { stat: "Magic Defense", value: "+2.5/level", note: "Pertumbuhan Stabil" },
                    { stat: "Attack Speed", value: "+0.02/level", note: "Peningkatan Signifikan" },
                    { stat: "HP Regen", value: "~0.44/level", note: "Sustain Sangat Baik" }
                ],
                conclusion: ["~162 HP - Memberikan durability yang baik.", "~11.8 Physical ATK - Pertumbuhan damage fisik tertinggi bersama Lancelot, sangat luar biasa dan mematikan.", "+4 Physical Defense - Membantunya bertahan dari serangan fisik.", "+2.5 Magic Defense - Pertumbuhan defensif magis yang standar.", "+0.02 Attack Speed - Peningkatan kecepatan serang yang signifikan.", "~0.44 HP Regen - Memberikan kemampuan sustain yang sangat baik."]
            },
            arlott: {
                name: "Arlott", icon: "",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2450", "3310", "4385", "5460", false],
                        ["Physical ATK", "120", "160", "210", "260", true],
                        ["Physical Defense", "21", "38", "60", "82", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "1.09", "1.13", "1.18", "1.23", false],
                        ["HP Regen", "8.0", "9.8", "12.0", "14.2", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "~215 HP/level", note: "Pertumbuhan Sangat Tinggi" },
                    { stat: "Physical ATK Growth", value: "+10 ATK/level", note: "Pertumbuhan Damage Sangat Tinggi" },
                    { stat: "Physical Defense", value: "~4.4/level", note: "Tahanan Fisik Kuat" },
                    { stat: "Magic Defense", value: "+2.5/level", note: "Pertumbuhan Stabil" },
                    { stat: "Attack Speed", value: "+0.01/level", note: "Peningkatan Stabil" },
                    { stat: "HP Regen", value: "~0.44/level", note: "Sustain Sangat Baik" }
                ],
                conclusion: ["~215 HP - Pertumbuhan HP yang sangat tinggi, memberinya durability luar biasa.", "+10 Physical ATK - Pertumbuhan damage fisik yang sangat tinggi, kedua setelah Lancelot.", "~4.4 Physical Defense - Pertumbuhan pertahanan fisik yang kuat.", "+2.5 Magic Defense - Pertumbuhan defensif magis yang standar.", "+0.01 Attack Speed - Peningkatan kecepatan serang yang stabil.", "~0.44 HP Regen - Memberikan kemampuan sustain yang sangat baik."]
            },
            yin: {
                name: "Yin", icon: "👊",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2400", "3220", "4245", "5270", false],
                        ["Physical ATK", "109", "138", "174", "210", true],
                        ["Physical Defense", "21", "39", "61", "84", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "1.07", "1.17", "1.29", "1.42", false],
                        ["HP Regen", "9.8", "11.6", "13.8", "16.0", false],
                        ["Movement SPD", "252", "252", "252", "252", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+205 HP/level", note: "Stabil & Linear" },
                    { stat: "Physical ATK Growth", value: "+8.1 ATK/level", note: "Rata-rata +8.1" },
                    { stat: "Physical Defense", value: "+4.5/level", note: "Rata-rata +4.5" },
                    { stat: "Magic Defense", value: "+2.5/level", note: "Rata-rata +2.5" },
                    { stat: "Attack Speed", value: "+0.025/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.45/level", note: "Rata-rata +0.45" }
                ],
                conclusion: ["+205 HP", "+8.1 Physical ATK", "+4.5 Physical Defense", "+2.5 Magic Defense", "+0.025 Attack Speed", "+0.45 HP Regen"]
            },
            julian: {
                name: "Julian", icon: "👹",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2700", "3620", "4770", "5920", false],
                        ["Physical ATK", "128", "165", "211", "257", true],
                        ["Physical Defense", "24", "42", "64", "87", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "1.10", "1.20", "1.32", "1.45", false],
                        ["HP Regen", "7.8", "9.6", "11.8", "14.2", false],
                        ["Mana", "500", "900", "1400", "1900", false],
                        ["Mana Regen", "4.0", "4.8", "5.8", "6.8", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+230 HP/level", note: "Pertumbuhan Tertinggi" },
                    { stat: "Physical ATK Growth", value: "~9.2 ATK/level", note: "Pertumbuhan Damage Sangat Tinggi" },
                    { stat: "Physical Defense", value: "+4.5/level", note: "Tahanan Fisik Sangat Kuat" },
                    { stat: "Magic Defense", value: "+2.5/level", note: "Pertumbuhan Stabil" },
                    { stat: "Attack Speed", value: "+0.025/level", note: "Peningkatan Signifikan" },
                    { stat: "HP Regen", value: "~0.46/level", note: "Sustain Luar Biasa" },
                    { stat: "Mana", value: "+100/level", note: "Pertumbuhan Tepat" },
                    { stat: "Mana Regen", value: "+0.2/level", note: "Pertumbuhan Stabil" }
                ],
                conclusion: ["+230 HP - Pertumbuhan HP tertinggi di antara semua hero yang dianalisis, memberikan durability yang sangat besar.", "~9.2 Physical ATK - Pertumbuhan damage fisik yang sangat tinggi, kedua setelah Saber.", "+4.5 Physical Defense - Pertumbuhan pertahanan fisik yang sangat kuat.", "+2.5 Magic Defense - Pertumbuhan defensif magis yang standar.", "+0.025 Attack Speed - Peningkatan kecepatan serang yang signifikan, memperkuat DPS-nya.", "~0.46 HP Regen - Pertumbuhan regenerasi HP tertinggi, memberikan sustain yang luar biasa baik.", "+100 Mana - Memastikan ketersediaan mana untuk skill.", "+0.2 Mana Regen - Regenerasi mana yang stabil."]
            },
            bane: { 
                name: "Bane", icon: "🦐",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2381", "3361", "4586", "5811", false],
                        ["Physical ATK", "117", "160", "215", "269", true],
                        ["Physical Defense", "23", "40", "62", "84", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "1.06", "1.14", "1.24", "1.34", false],
                        ["HP Regen", "8.4", "10.8", "13.8", "16.8", false],
                        ["Mana", "500", "900", "1400", "1900", false],
                        ["Mana Regen", "4.0", "4.8", "5.8", "6.8", false],
                        ["Movement SPD", "260", "260", "260", "260", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+245 HP/level", note: "Stabil & Linear" },
                    { stat: "Physical ATK Growth", value: "+10.8 ATK/level", note: "Konsisten" },
                    { stat: "Physical Defense", value: "+4.4/level", note: "Rata-rata" },
                    { stat: "Magic Defense", value: "+2.5/level", note: "Rata-rata" },
                    { stat: "Attack Speed", value: "+0.02/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.6/level", note: "Tepat +0.6" },
                    { stat: "Mana", value: "+100/level", note: "Tepat +100" },
                    { stat: "Mana Regen", value: "+0.2/level", note: "Tepat +0.2" }
                ],
                conclusion: ["+245 HP", "+10.8 Physical ATK", "+4.4 Physical Defense", "+2.5 Magic Defense", "+0.02 Attack Speed", "+0.6 HP Regen", "+100 Mana", "+0.2 Mana Regen"]
            },
            zilong: {
                name: "Zilong", icon: "🐉",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2511", "3379", "4464", "5549", false],
                        ["Physical ATK", "123", "159", "204", "249", true],
                        ["Physical Defense", "25", "43", "67", "90", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "1.05", "1.13", "1.23", "1.33", false],
                        ["HP Regen", "7.0", "8.6", "10.6", "12.6", false],
                        ["Mana", "500", "900", "1400", "1900", false],
                        ["Mana Regen", "4.0", "4.8", "5.8", "6.8", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "~217 HP/level", note: "Pertumbuhan Sangat Tinggi" },
                    { stat: "Physical ATK Growth", value: "+9 ATK/level", note: "Pertumbuhan Damage Tertinggi" },
                    { stat: "Physical Defense", value: "~4.6/level", note: "Tahanan Fisik Kuat" },
                    { stat: "Magic Defense", value: "+2.5/level", note: "Pertumbuhan Stabil" },
                    { stat: "Attack Speed", value: "+0.02/level", note: "Peningkatan Signifikan" },
                    { stat: "HP Regen", value: "+0.4/level", note: "Sustain Sangat Baik" },
                    { stat: "Mana", value: "+100/level", note: "Pertumbuhan Tepat" },
                    { stat: "Mana Regen", value: "+0.2/level", note: "Pertumbuhan Stabil" }
                ],
                conclusion: ["~217 HP - Memberikan durability yang luar biasa, salah satu yang tertinggi.", "+9 Physical ATK - Pertumbuhan damage fisik tertinggi di antara hero-hero yang dianalisis, sangat mematikan.", "~4.6 Physical Defense - Membantunya bertahan dari serangan fisik.", "+2.5 Magic Defense - Pertumbuhan defensif magis yang standar.", "+0.02 Attack Speed - Peningkatan kecepatan serang yang konsisten, memperkuat DPS-nya.", "+0.4 HP Regen - Memberikan kemampuan sustain yang sangat baik, baik di lane maupun saat jungling.", "+100 Mana - Memastikan ketersediaan mana untuk skill.", "+0.2 Mana Regen - Regenerasi mana yang stabil."]
            },
            alucard: {
                name: "Alucard", icon: "⚔️",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2443", "3343", "4468", "5593", false],
                        ["Physical ATK", "123", "157", "200", "244", true],
                        ["Physical Defense", "21", "39", "62", "85", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "1.12", "1.24", "1.39", "1.54", false],
                        ["HP Regen", "7.8", "9.6", "11.8", "14.0", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+225 HP/level", note: "Pertumbuhan Tertinggi" },
                    { stat: "Physical ATK Growth", value: "~8.6 ATK/level", note: "Pertumbuhan Damage Sangat Tinggi" },
                    { stat: "Physical Defense", value: "~4.6/level", note: "Tahanan Fisik Kuat" },
                    { stat: "Magic Defense", value: "+2.5/level", note: "Pertumbuhan Stabil" },
                    { stat: "Attack Speed", value: "+0.03/level", note: "Peningkatan Signifikan" },
                    { stat: "HP Regen", value: "~0.44/level", note: "Sustain Sangat Baik" }
                ],
                conclusion: ["+225 HP - Pertumbuhan HP tertinggi di antara semua hero yang dianalisis, memberikan durability luar biasa.", "~8.6 Physical ATK - Pertumbuhan damage yang sangat tinggi, menjadikannya ancaman besar di late game.", "~4.6 Physical Defense - Membantunya bertahan dari serangan fisik.", "+2.5 Magic Defense - Pertumbuhan defensif magis yang standar.", "+0.03 Attack Speed - Peningkatan kecepatan serang yang signifikan, memperkuat DPS-nya secara drastis.", "~0.44 HP Regen - Memberikan kemampuan sustain yang sangat baik, cocok dengan gaya bermainnya yang agresif."]
            },
            gatotkaca: {
                name: "Gatotkaca", icon: "🔥",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2520", "3420", "4545", "5670", false],
                        ["Physical ATK", "128", "156", "192", "228", true],
                        ["Physical Defense", "10", "35", "67", "99", false],
                        ["Magic Defense", "15", "31", "51", "71", false],
                        ["Attack Speed", "1.02", "1.08", "1.15", "1.23", false],
                        ["HP Regen", "8.4", "10.8", "13.8", "16.8", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+225 HP/level", note: "Pertumbuhan Sangat Tinggi" },
                    { stat: "Physical ATK Growth", value: "+7.1 ATK/level", note: "Pertumbuhan Damage Baik" },
                    { stat: "Physical Defense", value: "+6.4/level", note: "Pertahanan Fisik Luar Biasa" },
                    { stat: "Magic Defense", value: "+4/level", note: "Pertahanan Magis Sangat Baik" },
                    { stat: "Attack Speed", value: "+0.015/level", note: "Peningkatan Stabil" },
                    { stat: "HP Regen", value: "+0.6/level", note: "Sustain Luar Biasa" }
                ],
                conclusion: ["+225 HP - Pertumbuhan HP yang sangat tinggi, memberikan durability masif sebagai tank.", "+7.1 Physical ATK - Pertumbuhan damage yang baik untuk seorang tank.", "+6.4 Physical Defense - Pertumbuhan pertahanan fisik yang luar biasa, membuatnya sangat tangguh.", "+4 Magic Defense - Pertahanan magis yang sangat baik, jauh di atas rata-rata.", "+0.015 Attack Speed - Peningkatan kecepatan serang yang stabil.", "+0.6 HP Regen - Regenerasi HP tertinggi, memberikan sustain yang luar biasa baik."]
            },
            grock: {
                name: "Grock", icon: "🗿",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2819", "3779", "4979", "6179", false],
                        ["Physical ATK", "135", "168", "209", "250", true],
                        ["Physical Defense", "21", "41", "113", "156", false],
                        ["Magic Defense", "15", "31", "51", "71", false],
                        ["Attack Speed", "1.01", "1.05", "1.10", "1.15", false],
                        ["HP Regen", "8.4", "10.8", "13.8", "16.8", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+240 HP/level", note: "Pertumbuhan Tertinggi" },
                    { stat: "Physical ATK Growth", value: "~8.2 ATK/level", note: "Pertumbuhan Damage Tinggi" },
                    { stat: "Physical Defense", value: "~9.6/level", note: "Pertumbuhan Pertahanan Luar Biasa" },
                    { stat: "Magic Defense", value: "+4/level", note: "Pertumbuhan Sangat Baik" },
                    { stat: "Attack Speed", value: "+0.01/level", note: "Peningkatan Stabil" },
                    { stat: "HP Regen", value: "+0.6/level", note: "Sustain Luar Biasa" }
                ],
                conclusion: ["+240 HP - Pertumbuhan HP tertinggi di antara semua hero yang dianalisis, memberikan durability yang sangat masif.", "~8.2 Physical ATK - Pertumbuhan damage yang tinggi untuk seorang tank, memungkinkannya untuk memberikan ancaman juga.", "~9.6 Physical Defense - Pertumbuhan pertahanan fisik yang luar biasa tinggi, membuatnya hampir tak tersentuh oleh serangan fisik di late game.", "+4 Magic Defense - Pertumbuhan defensif magis yang sangat baik, jauh di atas rata-rata.", "+0.01 Attack Speed - Peningkatan kecepatan serang yang stabil.", "+0.6 HP Regen - Pertumbuhan regenerasi HP tertinggi, memberikan sustain yang luar biasa baik."]
            },
            roger: {
                name: "Roger", icon: "🐺",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2530", "3204", "4046", "4889", false],
                        ["Physical ATK", "128", "182", "249", "317", true],
                        ["Physical Defense", "22", "39", "60", "82", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "1.05", "1.11", "1.18", "1.26", false],
                        ["HP Regen", "7.2", "8.0", "9.2", "10.2", false],
                        ["Mana", "500", "900", "1400", "1900", false],
                        ["Mana Regen", "4.0", "4.8", "5.8", "6.8", false],
                        ["Movement SPD", "240", "240", "240", "240", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+168.5 HP/level", note: "Stabil & Linear" },
                    { stat: "Physical ATK Growth", value: "+13.5 ATK/level", note: "Sangat Tinggi" },
                    { stat: "Physical Defense", value: "+4.2 - 4.4/level", note: "Rata-rata +4.3" },
                    { stat: "Magic Defense", value: "+2.4 - 2.6/level", note: "Rata-rata +2.5" },
                    { stat: "Attack Speed", value: "+0.015/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.2/level", note: "Rata-rata +0.2" },
                    { stat: "Mana", value: "+100/level", note: "Tepat +100" },
                    { stat: "Mana Regen", value: "+0.2/level", note: "Tepat +0.2" }
                ],
                conclusion: ["+168.5 HP", "+13.5 Physical ATK", "+4.3 Physical Defense", "+2.5 Magic Defense", "+0.015 Attack Speed", "+0.2 HP Regen", "+100 Mana", "+0.2 Mana Regen"]
            },
            paquito: {
                name: "Paquito", icon: "🥊",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2620", "3440", "4465", "5490", false],
                        ["Physical ATK", "121", "161", "211", "262", true],
                        ["Physical Defense", "22", "40", "63", "86", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "1.22", "1.32", "1.44", "1.57", false],
                        ["HP Regen", "9.8", "11.6", "13.8", "16.0", false],
                        ["Movement SPD", "260", "260", "260", "260", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+205 HP/level", note: "Stabil & Linear" },
                    { stat: "Physical ATK Growth", value: "+10.1 ATK/level", note: "Rata-rata +10.1" },
                    { stat: "Physical Defense", value: "+4.6/level", note: "Rata-rata +4.6" },
                    { stat: "Magic Defense", value: "+2.5/level", note: "Rata-rata +2.5" },
                    { stat: "Attack Speed", value: "+0.025/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.44/level", note: "Rata-rata +0.44" }
                ],
                conclusion: ["+205 HP", "+10.1 Physical ATK", "+4.6 Physical Defense", "+2.5 Magic Defense", "+0.025 Attack Speed", "+0.44 HP Regen"]
            },
            benedetta: {
                name: "Benedetta", icon: "⚔️",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2410", "3122", "4012", "4902", false],
                        ["Physical ATK", "113", "154", "205", "256", true],
                        ["Physical Defense", "18", "34", "54", "74", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "1.10", "1.18", "1.28", "1.38", false],
                        ["HP Regen", "6.6", "8.4", "10.6", "12.8", false],
                        ["Mana", "500", "900", "1400", "1900", false],
                        ["Mana Regen", "4.0", "4.8", "5.8", "6.8", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "~178 HP/level", note: "Pertumbuhan Sangat Baik" },
                    { stat: "Physical ATK Growth", value: "~10.2 ATK/level", note: "Pertumbuhan Damage Sangat Tinggi" },
                    { stat: "Physical Defense", value: "+4/level", note: "Tahanan Fisik Kuat" },
                    { stat: "Magic Defense", value: "+2.5/level", note: "Pertumbuhan Stabil" },
                    { stat: "Attack Speed", value: "+0.02/level", note: "Peningkatan Signifikan" },
                    { stat: "HP Regen", value: "~0.44/level", note: "Sustain Sangat Baik" },
                    { stat: "Mana", value: "+100/level", note: "Pertumbuhan Tepat" },
                    { stat: "Mana Regen", value: "+0.2/level", note: "Pertumbuhan Stabil" }
                ],
                conclusion: ["~178 HP - Memberikan durability yang sangat baik.", "~10.2 Physical ATK - Pertumbuhan damage fisik yang sangat tinggi, ketiga setelah Lancelot dan Hayabusa.", "+4 Physical Defense - Pertumbuhan pertahanan fisik yang kuat.", "+2.5 Magic Defense - Pertumbuhan defensif magis yang standar.", "+0.02 Attack Speed - Peningkatan kecepatan serang yang signifikan.", "~0.44 HP Regen - Memberikan kemampuan sustain yang sangat baik.", "+100 Mana - Memastikan ketersediaan mana untuk skill.", "+0.2 Mana Regen - Regenerasi mana yang stabil."]
            },
          }, assassin: {
                            nolan: {
                    name: "Nolan", icon: "⚔️",
                    stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                        rows: [
                            ["HP", "2390", "3038", "3848", "4658", false],
                            ["Physical ATK", "124", "171", "230", "289", true],
                            ["Physical Defense", "16", "32", "52", "72", false],
                            ["Magic Defense", "15", "25", "37", "50", false],
                            ["Attack Speed", "1.08", "1.16", "1.26", "1.36", false],
                            ["HP Regen", "7.0", "8.8", "11.0", "13.2", false],
                            ["Movement SPD", "260", "260", "260", "260", false]
                        ]},
                    growth: [
                        { stat: "HP Growth", value: "+162 HP/level", note: "Stabil & Linear" },
                        { stat: "Physical ATK Growth", value: "+11.8 ATK/level", note: "Sangat Konsisten" },
                        { stat: "Physical Defense", value: "+4.0/level", note: "Tepat +4" },
                        { stat: "Magic Defense", value: "+2.5/level", note: "Tepat +2.5" },
                        { stat: "Attack Speed", value: "+0.02/level", note: "Stabil" },
                        { stat: "HP Regen", value: "+0.44/level", note: "Rata-rata +0.44" }
                    ],
                    conclusion: ["+162 HP", "+11.8 Physical ATK", "+4 Physical Defense", "+2.5 Magic Defense", "+0.02 Attack Speed", "+0.44 HP Regen"]
                },
                joy: {
                    name: "Joy", icon: "🐰",
                    stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                        rows: [
                            ["HP", "2519", "3359", "4409", "5459", false],
                            ["Physical ATK", "119", "158", "206", "255", true],
                            ["Physical Defense", "20", "38", "60", "83", false],
                            ["Magic Defense", "15", "25", "37", "50", false],
                            ["Attack Speed", "1.12", "1.20", "1.30", "1.40", false],
                            ["HP Regen", "7.8", "9.6", "11.8", "14.0", false],
                            ["Movement SPD", "260", "260", "260", "260", false]
                        ]},
                    growth: [
                        { stat: "HP Growth", value: "+208 HP/level", note: "Stabil & Linear" },
                        { stat: "Physical ATK Growth", value: "+9.7 ATK/level", note: "Rata-rata +9.7" },
                        { stat: "Physical Defense", value: "+4.5/level", note: "Rata-rata +4.5" },
                        { stat: "Magic Defense", value: "+2.5/level", note: "Tepat +2.5" },
                        { stat: "Attack Speed", value: "+0.02/level", note: "Stabil" },
                        { stat: "HP Regen", value: "+0.44/level", note: "Rata-rata +0.44" }
                    ],
                    conclusion: ["+208 HP", "+9.7 Physical ATK", "+4.5 Physical Defense", "+2.5 Magic Defense", "+0.02 Attack Speed", "+0.44 HP Regen"]
                },
                yin: {
                    name: "Yin", icon: "👊",
                    stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                        rows: [
                            ["HP", "2400", "3220", "4245", "5270", false],
                            ["Physical ATK", "109", "138", "174", "210", true],
                            ["Physical Defense", "21", "39", "61", "84", false],
                            ["Magic Defense", "15", "25", "37", "50", false],
                            ["Attack Speed", "1.07", "1.17", "1.29", "1.42", false],
                            ["HP Regen", "9.8", "11.6", "13.8", "16.0", false],
                            ["Movement SPD", "252", "252", "252", "252", false]
                        ]},
                    growth: [
                        { stat: "HP Growth", value: "+205 HP/level", note: "Stabil & Linear" },
                        { stat: "Physical ATK Growth", value: "+8.1 ATK/level", note: "Rata-rata +8.1" },
                        { stat: "Physical Defense", value: "+4.5/level", note: "Rata-rata +4.5" },
                        { stat: "Magic Defense", value: "+2.5/level", note: "Rata-rata +2.5" },
                        { stat: "Attack Speed", value: "+0.025/level", note: "Stabil" },
                        { stat: "HP Regen", value: "+0.45/level", note: "Rata-rata +0.45" }
                    ],
                    conclusion: ["+205 HP", "+8.1 Physical ATK", "+4.5 Physical Defense", "+2.5 Magic Defense", "+0.025 Attack Speed", "+0.45 HP Regen"]
                },
                aamon: {
                    name: "Aamon", icon: "🗡️",
                    stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                        rows: [
                            ["HP", "2455", "3123", "3958", "4793", false],
                            ["Physical ATK", "115", "155", "205", "255", true],
                            ["Physical Defense", "19", "36", "57", "79", false],
                            ["Magic Defense", "15", "25", "37", "50", false],
                            ["Attack Speed", "1.09", "1.15", "1.22", "1.30", false],
                            ["HP Regen", "8.0", "9.8", "12.0", "14.2", false],
                            ["Mana", "500", "900", "1400", "1900", false],
                            ["Mana Regen", "4.0", "4.8", "5.8", "6.8", false],
                            ["Movement SPD", "250", "250", "250", "250", false]
                        ]},
                    growth: [
                        { stat: "HP Growth", value: "+167 HP/level", note: "Stabil & Linear" },
                        { stat: "Physical ATK Growth", value: "+10 ATK/level", note: "Sangat Konsisten" },
                        { stat: "Physical Defense", value: "+4.3/level", note: "Rata-rata +4.3" },
                        { stat: "Magic Defense", value: "+2.5/level", note: "Tepat +2.5" },
                        { stat: "Attack Speed", value: "+0.015/level", note: "Stabil" },
                        { stat: "HP Regen", value: "+0.44/level", note: "Rata-rata +0.44" },
                        { stat: "Mana", value: "+100/level", note: "Tepat +100" },
                        { stat: "Mana Regen", value: "+0.2/level", note: "Tepat +0.2" }
                    ],
                    conclusion: ["+167 HP", "+10 Physical ATK", "+4.3 Physical Defense", "+2.5 Magic Defense", "+0.015 Attack Speed", "+0.44 HP Regen", "+100 Mana", "+0.2 Mana Regen"]
                },
                paquito: {
                    name: "Paquito", icon: "🥊",
                    stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                        rows: [
                            ["HP", "2620", "3440", "4465", "5490", false],
                            ["Physical ATK", "121", "161", "211", "262", true],
                            ["Physical Defense", "22", "40", "63", "86", false],
                            ["Magic Defense", "15", "25", "37", "50", false],
                            ["Attack Speed", "1.22", "1.32", "1.44", "1.57", false],
                            ["HP Regen", "9.8", "11.6", "13.8", "16.0", false],
                            ["Movement SPD", "260", "260", "260", "260", false]
                        ]},
                    growth: [
                        { stat: "HP Growth", value: "+205 HP/level", note: "Stabil & Linear" },
                        { stat: "Physical ATK Growth", value: "+10.1 ATK/level", note: "Rata-rata +10.1" },
                        { stat: "Physical Defense", value: "+4.6/level", note: "Rata-rata +4.6" },
                        { stat: "Magic Defense", value: "+2.5/level", note: "Rata-rata +2.5" },
                        { stat: "Attack Speed", value: "+0.025/level", note: "Stabil" },
                        { stat: "HP Regen", value: "+0.44/level", note: "Rata-rata +0.44" }
                    ],
                    conclusion: ["+205 HP", "+10.1 Physical ATK", "+4.6 Physical Defense", "+2.5 Magic Defense", "+0.025 Attack Speed", "+0.44 HP Regen"]
                },
                mathilda: {
                    name: "Mathilda", icon: "🧚‍♀️",
                    stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                        rows: [
                            ["HP", "2530", "3334", "4339", "5344", false],
                            ["Physical ATK", "120", "147", "180", "214", true],
                            ["Physical Defense", "22", "38", "59", "80", false],
                            ["Magic Defense", "15", "25", "37", "50", false],
                            ["Attack Speed", "1.00", "1.02", "1.04", "1.07", false],
                            ["HP Regen", "6.8", "7.8", "9.4", "10.8", false],
                            ["Mana", "500", "900", "1400", "1900", false],
                            ["Mana Regen", "4.0", "4.8", "5.8", "6.8", false],
                            ["Movement SPD", "252", "252", "252", "252", false]
                        ]},
                    growth: [
                        { stat: "HP Growth", value: "+201 HP/level", note: "Stabil & Linear" },
                        { stat: "Physical ATK Growth", value: "+6.7 ATK/level", note: "Rata-rata +6.7" },
                        { stat: "Physical Defense", value: "+4.1/level", note: "Rata-rata +4.1" },
                        { stat: "Magic Defense", value: "+2.5/level", note: "Rata-rata +2.5" },
                        { stat: "Attack Speed", value: "+0.005/level", note: "Stabil" },
                        { stat: "HP Regen", value: "+0.28/level", note: "Rata-rata +0.28" },
                        { stat: "Mana", value: "+100/level", note: "Tepat +100" },
                        { stat: "Mana Regen", value: "+0.2/level", note: "Tepat +0.2" }
                    ],
                    conclusion: ["+201 HP", "+6.7 Physical ATK", "+4.1 Physical Defense", "+2.5 Magic Defense", "+0.005 Attack Speed", "+0.28 HP Regen", "+100 Mana", "+0.2 Mana Regen"]
                },
                hanzo: {
                    name: "Hanzo", icon: "👹",
                    stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                        rows: [
                            ["HP", "2594", "3174", "3899", "4624", false],
                            ["Physical ATK", "108", "140", "180", "220", true],
                            ["Physical Defense", "17", "33", "53", "73", false],
                            ["Magic Defense", "15", "25", "38", "50", false],
                            ["Attack Speed", "1.08", "1.16", "1.26", "1.36", false],
                            ["HP Regen", "7.0", "8.8", "11.0", "13.2", false],
                            ["Movement SPD", "260", "260", "260", "260", false]
                        ]},
                    growth: [
                        { stat: "HP Growth", value: "+145 HP/level", note: "Stabil & Linear" },
                        { stat: "Physical ATK Growth", value: "+8 ATK/level", note: "Sangat Konsisten" },
                        { stat: "Physical Defense", value: "+4.0/level", note: "Tepat +4.0" },
                        { stat: "Magic Defense", value: "+2.5/level", note: "Rata-rata +2.5" },
                        { stat: "Attack Speed", value: "+0.02/level", note: "Stabil" },
                        { stat: "HP Regen", value: "+0.44/level", note: "Rata-rata +0.44" }
                    ],
                    conclusion: ["+145 HP", "+8 Physical ATK", "+4.0 Physical Defense", "+2.5 Magic Defense", "+0.02 Attack Speed", "+0.44 HP Regen"]
                },
                gusion: {
                    name: "Gusion", icon: "🗡️",
                    stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                        rows: [
                            ["HP", "2419", "3139", "4039", "4939", false],
                            ["Physical ATK", "119", "152", "193", "234", true],
                            ["Physical Defense", "18", "35", "57", "79", false],
                            ["Magic Defense", "15", "25", "37", "50", false],
                            ["Attack Speed", "1.11", "1.21", "1.33", "1.46", false],
                            ["HP Regen", "7.8", "9.6", "11.8", "14.0", false],
                            ["Mana", "500", "900", "1400", "1900", false],
                            ["Mana Regen", "4.0", "4.8", "5.8", "6.8", false],
                            ["Movement SPD", "260", "260", "260", "260", false]
                        ]},
                    growth: [
                        { stat: "HP Growth", value: "+180 HP/level", note: "Stabil & Linear" },
                        { stat: "Physical ATK Growth", value: "+8.2 ATK/level", note: "Rata-rata +8.2" },
                        { stat: "Physical Defense", value: "+4.3/level", note: "Rata-rata +4.3" },
                        { stat: "Magic Defense", value: "+2.5/level", note: "Rata-rata +2.5" },
                        { stat: "Attack Speed", value: "+0.025/level", note: "Stabil" },
                        { stat: "HP Regen", value: "+0.44/level", note: "Rata-rata +0.44" },
                        { stat: "Mana", value: "+100/level", note: "Tepat +100" },
                        { stat: "Mana Regen", value: "+0.2/level", note: "Tepat +0.2" }
                    ],
                    conclusion: ["+180 HP", "+8.2 Physical ATK", "+4.3 Physical Defense", "+2.5 Magic Defense", "+0.025 Attack Speed", "+0.44 HP Regen", "+100 Mana", "+0.2 Mana Regen"]
                },
                fanny: {
                    name: "Fanny", icon: "🦅",
                    stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                        rows: [
                            ["HP", "2267", "2891", "3671", "4451", false],
                            ["Physical ATK", "126", "167", "218", "269", true],
                            ["Physical Defense", "16", "31", "50", "69", false],
                            ["Magic Defense", "15", "25", "37", "50", false],
                            ["Attack Speed", "1.11", "1.19", "1.29", "1.39", false],
                            ["HP Regen", "6.6", "8.2", "10.4", "12.4", false],
                            ["Energy", "100", "100", "100", "100", false],
                            ["Movement SPD", "265", "265", "265", "265", false]
                        ]},
                    growth: [
                        { stat: "HP Growth", value: "+156 HP/level", note: "Stabil & Linear" },
                        { stat: "Physical ATK Growth", value: "+10.2 ATK/level", note: "Sangat Konsisten" },
                        { stat: "Physical Defense", value: "+3.8/level", note: "Rata-rata +3.8" },
                        { stat: "Magic Defense", value: "+2.5/level", note: "Rata-rata +2.5" },
                        { stat: "Attack Speed", value: "+0.02/level", note: "Stabil" },
                        { stat: "HP Regen", value: "+0.41/level", note: "Rata-rata +0.41" }
                    ],
                    conclusion: ["+156 HP", "+10.2 Physical ATK", "+3.8 Physical Defense", "+2.5 Magic Defense", "+0.02 Attack Speed", "+0.41 HP Regen"]
                },
                natalia: {
                    name: "Natalia", icon: "🗡️",
                    stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                        rows: [
                            ["HP", "2480", "3196", "4091", "4986", false],
                            ["Physical ATK", "121", "156", "199", "243", true],
                            ["Physical Defense", "18", "34", "54", "75", false],
                            ["Magic Defense", "15", "25", "37", "50", false],
                            ["Attack Speed", "1.10", "1.16", "1.23", "1.31", false],
                            ["HP Regen", "7.0", "8.8", "11.0", "13.2", false],
                            ["Movement SPD", "260", "260", "260", "260", false]
                        ]},
                    growth: [
                        { stat: "HP Growth", value: "+167 HP/level", note: "Stabil & Linear" },
                        { stat: "Physical ATK Growth", value: "+8.1 ATK/level", note: "Rata-rata +8.1" },
                        { stat: "Physical Defense", value: "+4.0/level", note: "Tepat +4" },
                        { stat: "Magic Defense", value: "+2.5/level", note: "Rata-rata +2.5" },
                        { stat: "Attack Speed", value: "+0.015/level", note: "Stabil" },
                        { stat: "HP Regen", value: "+0.44/level", note: "Rata-rata +0.44" }
                    ],
                    conclusion: ["+167 HP", "+8.1 Physical ATK", "+4 Physical Defense", "+2.5 Magic Defense", "+0.015 Attack Speed", "+0.44 HP Regen"]
                },
                sora: {
                    name: "Sora", icon: "⚔️",
                    stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                        rows: [
                            ["HP", "2800", "3680", "4780", "5880", false],
                            ["Physical ATK", "145", "176", "214", "253", true],
                            ["Physical Defense", "25", "42", "65", "87", false],
                            ["Magic Defense", "15", "25", "37", "50", false],
                            ["Attack Speed", "1.02", "1.06", "1.11", "1.16", false],
                            ["HP Regen", "10.8", "12.6", "15.2", "17.6", false],
                            ["Movement SPD", "291", "291", "291", "291", false]
                        ]},
                    growth: [
                        { stat: "HP Growth", value: "+220 HP/level", note: "Stabil setelah lvl 5" },
                        { stat: "Physical ATK Growth", value: "+7.7 ATK/level", note: "Meningkat di late game" },
                        { stat: "Physical Defense", value: "+4.4/level", note: "Rata-rata tinggi" },
                        { stat: "Magic Defense", value: "+2.5/level", note: "Konsisten" },
                        { stat: "Attack Speed", value: "+0.01/level", note: "Stabil +0.05/5 level" },
                        { stat: "HP Regen", value: "+0.5/level", note: "Sustain baik" }
                    ],
                    conclusion: ["+220 HP (rata-rata, meningkat setelah lvl 5)", "+7.7 Physical ATK (scaling semakin baik)", "+4.4 Physical Defense (pertahanan solid)", "+2.5 Magic Defense (konsisten)", "+0.01 Attack Speed (stabil)", "+0.5 HP Regen (sustain excellent)"]
                },
                karina: {
                    name: "Karina", icon: "️",
                    stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                        rows: [
                            ["HP", "2474", "3285", "4299", "5313", false],
                            ["Physical ATK", "121", "154", "195", "236", true],
                            ["Physical Defense", "20", "38", "61", "84", false],
                            ["Magic Defense", "15", "25", "37", "50", false],
                            ["Attack Speed", "1.12", "1.24", "1.39", "1.54", false],
                            ["HP Regen", "7.8", "9.6", "11.8", "14.0", false],
                            ["Mana", "500", "900", "1400", "1900", false],
                            ["Mana Regen", "4.0", "4.8", "5.8", "6.8", false]
                        ]},
                    growth: [
                        { stat: "HP Growth", value: "~202.8 HP/level", note: "Pertumbuhan Sangat Tinggi" },
                        { stat: "Physical ATK Growth", value: "~8.2 ATK/level", note: "Damage Meningkat Tajam" },
                        { stat: "Physical Defense", value: "~4.6/level", note: "Tahanan Fisik Kuat" },
                        { stat: "Magic Defense", value: "+2.5/level", note: "Pertumbuhan Stabil" },
                        { stat: "Attack Speed", value: "+0.03/level", note: "Peningkatan Signifikan" },
                        { stat: "HP Regen", value: "~0.44/level", note: "Sustain Cukup Baik" },
                        { stat: "Mana", value: "+100/level", note: "Pertumbuhan Tepat" },
                        { stat: "Mana Regen", value: "+0.2/level", note: "Pertumbuhan Stabil" }
                    ],
                    conclusion: ["~202.8 HP - Memberikan durability yang sangat baik.", "~8.2 Physical ATK - Pertumbuhan damage yang tinggi.", "~4.6 Physical Defense - Membantunya bertahan dari serangan fisik.", "+2.5 Magic Defense - Pertumbuhan defensif magis yang standar.", "+0.03 Attack Speed - Meningkatkan kecepatan serangannya secara konsisten.", "~0.44 HP Regen - Membantu sustain di jungle.", "+100 Mana - Memastikan ketersediaan mana untuk spam skill.", "+0.2 Mana Regen - Regenerasi mana yang stabil."]
                },
                zilong: {
                    name: "Zilong", icon: "🐉",
                    stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                        rows: [
                            ["HP", "2511", "3379", "4464", "5549", false],
                            ["Physical ATK", "123", "159", "204", "249", true],
                            ["Physical Defense", "25", "43", "67", "90", false],
                            ["Magic Defense", "15", "25", "37", "50", false],
                            ["Attack Speed", "1.05", "1.13", "1.23", "1.33", false],
                            ["HP Regen", "7.0", "8.6", "10.6", "12.6", false],
                            ["Mana", "500", "900", "1400", "1900", false],
                            ["Mana Regen", "4.0", "4.8", "5.8", "6.8", false]
                        ]},
                    growth: [
                        { stat: "HP Growth", value: "~217 HP/level", note: "Pertumbuhan Sangat Tinggi" },
                        { stat: "Physical ATK Growth", value: "+9 ATK/level", note: "Pertumbuhan Damage Tertinggi" },
                        { stat: "Physical Defense", value: "~4.6/level", note: "Tahanan Fisik Kuat" },
                        { stat: "Magic Defense", value: "+2.5/level", note: "Pertumbuhan Stabil" },
                        { stat: "Attack Speed", value: "+0.02/level", note: "Peningkatan Signifikan" },
                        { stat: "HP Regen", value: "+0.4/level", note: "Sustain Sangat Baik" },
                        { stat: "Mana", value: "+100/level", note: "Pertumbuhan Tepat" },
                        { stat: "Mana Regen", value: "+0.2/level", note: "Pertumbuhan Stabil" }
                    ],
                    conclusion: ["~217 HP - Memberikan durability yang luar biasa, salah satu yang tertinggi.", "+9 Physical ATK - Pertumbuhan damage fisik tertinggi di antara hero-hero yang dianalisis, sangat mematikan.", "~4.6 Physical Defense - Membantunya bertahan dari serangan fisik.", "+2.5 Magic Defense - Pertumbuhan defensif magis yang standar.", "+0.02 Attack Speed - Peningkatan kecepatan serang yang konsisten, memperkuat DPS-nya.", "+0.4 HP Regen - Memberikan kemampuan sustain yang sangat baik, baik di lane maupun saat jungling.", "+100 Mana - Memastikan ketersediaan mana untuk skill.", "+0.2 Mana Regen - Regenerasi mana yang stabil."]
                },
                alucard: {
                    name: "Alucard", icon: "⚔️",
                    stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                        rows: [
                            ["HP", "2443", "3343", "4468", "5593", false],
                            ["Physical ATK", "123", "157", "200", "244", true],
                            ["Physical Defense", "21", "39", "62", "85", false],
                            ["Magic Defense", "15", "25", "37", "50", false],
                            ["Attack Speed", "1.12", "1.24", "1.39", "1.54", false],
                            ["HP Regen", "7.8", "9.6", "11.8", "14.0", false]
                        ]},
                    growth: [
                        { stat: "HP Growth", value: "+225 HP/level", note: "Pertumbuhan Tertinggi" },
                        { stat: "Physical ATK Growth", value: "~8.6 ATK/level", note: "Pertumbuhan Damage Sangat Tinggi" },
                        { stat: "Physical Defense", value: "~4.6/level", note: "Tahanan Fisik Kuat" },
                        { stat: "Magic Defense", value: "+2.5/level", note: "Pertumbuhan Stabil" },
                        { stat: "Attack Speed", value: "+0.03/level", note: "Peningkatan Signifikan" },
                        { stat: "HP Regen", value: "~0.44/level", note: "Sustain Sangat Baik" }
                    ],
                    conclusion: ["+225 HP - Pertumbuhan HP tertinggi di antara semua hero yang dianalisis, memberikan durability luar biasa.", "~8.6 Physical ATK - Pertumbuhan damage yang sangat tinggi, menjadikannya ancaman besar di late game.", "~4.6 Physical Defense - Membantunya bertahan dari serangan fisik.", "+2.5 Magic Defense - Pertumbuhan defensif magis yang standar.", "+0.03 Attack Speed - Peningkatan kecepatan serang yang signifikan, memperkuat DPS-nya secara drastis.", "~0.44 HP Regen - Memberikan kemampuan sustain yang sangat baik, cocok dengan gaya bermainnya yang agresif."]
                },
                saber: {
                    name: "Saber", icon: "🤖",
                    stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                        rows: [
                            ["HP", "2440", "3160", "4060", "4960", false],
                            ["Physical ATK", "118", "157", "205", "254", true],
                            ["Physical Defense", "20", "36", "56", "77", false],
                            ["Magic Defense", "15", "25", "37", "50", false],
                            ["Attack Speed", "1.08", "1.16", "1.26", "1.36", false],
                            ["HP Regen", "7.0", "8.8", "11.0", "13.2", false],
                            ["Mana", "500", "900", "1400", "1900", false],
                            ["Mana Regen", "4.0", "4.8", "5.8", "6.8", false]
                        ]},
                    growth: [
                        { stat: "HP Growth", value: "+180 HP/level", note: "Pertumbuhan Sangat Baik" },
                        { stat: "Physical ATK Growth", value: "~9.7 ATK/level", note: "Pertumbuhan Damage Tertinggi" },
                        { stat: "Physical Defense", value: "~4.1/level", note: "Tahanan Fisik Kuat" },
                        { stat: "Magic Defense", value: "+2.5/level", note: "Pertumbuhan Stabil" },
                        { stat: "Attack Speed", value: "+0.02/level", note: "Peningkatan Signifikan" },
                        { stat: "HP Regen", value: "~0.44/level", note: "Sustain Sangat Baik" },
                        { stat: "Mana", value: "+100/level", note: "Pertumbuhan Tepat" },
                        { stat: "Mana Regen", value: "+0.2/level", note: "Pertumbuhan Stabil" }
                    ],
                    conclusion: ["+180 HP - Memberikan durability yang baik untuk seorang assassin.", "~9.7 Physical ATK - Pertumbuhan damage fisik tertinggi di antara semua hero yang dianalisis, sangat mematikan.", "~4.1 Physical Defense - Membantunya bertahan dari serangan fisik.", "+2.5 Magic Defense - Pertumbuhan defensif magis yang standar.", "+0.02 Attack Speed - Peningkatan kecepatan serang yang konsisten.", "~0.44 HP Regen - Memberikan kemampuan sustain yang sangat baik.", "+100 Mana - Memastikan ketersediaan mana untuk spam skill.", "+0.2 Mana Regen - Regenerasi mana yang stabil."]
                },
                helcurt: {
                    name: "Helcurt", icon: "🦇",
                    stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                        rows: [
                            ["HP", "2440", "3144", "4024", "4904", false],
                            ["Physical ATK", "121", "153", "193", "233", true],
                            ["Physical Defense", "17", "33", "53", "73", false],
                            ["Magic Defense", "15", "25", "37", "50", false],
                            ["Attack Speed", "1.16", "1.24", "1.34", "1.44", false],
                            ["HP Regen", "7.0", "8.8", "11.0", "13.2", false]
                        ]},
                    growth: [
                        { stat: "HP Growth", value: "~176 HP/level", note: "Pertumbuhan Sangat Baik" },
                        { stat: "Physical ATK Growth", value: "+8 ATK/level", note: "Pertumbuhan Damage Tinggi" },
                        { stat: "Physical Defense", value: "+4/level", note: "Tahanan Fisik Kuat" },
                        { stat: "Magic Defense", value: "+2.5/level", note: "Pertumbuhan Stabil" },
                        { stat: "Attack Speed", value: "+0.02/level", note: "Peningkatan Signifikan" },
                        { stat: "HP Regen", value: "~0.44/level", note: "Sustain Sangat Baik" }
                    ],
                    conclusion: ["~176 HP - Memberikan durability yang baik untuk seorang assassin.", "+8 Physical ATK - Pertumbuhan damage yang tinggi, cocok untuk burst damage.", "+4 Physical Defense - Membantunya bertahan dari serangan fisik.", "+2.5 Magic Defense - Pertumbuhan defensif magis yang standar.", "+0.02 Attack Speed - Peningkatan kecepatan serang yang signifikan, memperkuat DPS-nya secara drastis.", "~0.44 HP Regen - Memberikan kemampuan sustain yang sangat baik."]
                },
                julian: {
                    name: "Julian", icon: "👹",
                    stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                        rows: [
                            ["HP", "2700", "3620", "4770", "5920", false],
                            ["Physical ATK", "128", "165", "211", "257", true],
                            ["Physical Defense", "24", "42", "64", "87", false],
                            ["Magic Defense", "15", "25", "37", "50", false],
                            ["Attack Speed", "1.10", "1.20", "1.32", "1.45", false],
                            ["HP Regen", "7.8", "9.6", "11.8", "14.2", false],
                            ["Mana", "500", "900", "1400", "1900", false],
                            ["Mana Regen", "4.0", "4.8", "5.8", "6.8", false]
                        ]},
                    growth: [
                        { stat: "HP Growth", value: "+230 HP/level", note: "Pertumbuhan Tertinggi" },
                        { stat: "Physical ATK Growth", value: "~9.2 ATK/level", note: "Pertumbuhan Damage Sangat Tinggi" },
                        { stat: "Physical Defense", value: "+4.5/level", note: "Tahanan Fisik Sangat Kuat" },
                        { stat: "Magic Defense", value: "+2.5/level", note: "Pertumbuhan Stabil" },
                        { stat: "Attack Speed", value: "+0.025/level", note: "Peningkatan Signifikan" },
                        { stat: "HP Regen", value: "~0.46/level", note: "Sustain Luar Biasa" },
                        { stat: "Mana", value: "+100/level", note: "Pertumbuhan Tepat" },
                        { stat: "Mana Regen", value: "+0.2/level", note: "Pertumbuhan Stabil" }
                    ],
                    conclusion: ["+230 HP - Pertumbuhan HP tertinggi di antara semua hero yang dianalisis, memberikan durability yang sangat besar.", "~9.2 Physical ATK - Pertumbuhan damage fisik yang sangat tinggi, kedua setelah Saber.", "+4.5 Physical Defense - Pertumbuhan pertahanan fisik yang sangat kuat.", "+2.5 Magic Defense - Pertumbuhan defensif magis yang standar.", "+0.025 Attack Speed - Peningkatan kecepatan serang yang signifikan, memperkuat DPS-nya.", "~0.46 HP Regen - Pertumbuhan regenerasi HP tertinggi, memberikan sustain yang luar biasa baik.", "+100 Mana - Memastikan ketersediaan mana untuk skill.", "+0.2 Mana Regen - Regenerasi mana yang stabil."]
                },
                hayabusa: {
                    name: "Hayabusa", icon: "🥷",
                    stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                        rows: [
                            ["HP", "2270", "2956", "3813", "4671", false],
                            ["Physical ATK", "117", "155", "203", "251", true],
                            ["Physical Defense", "17", "33", "54", "75", false],
                            ["Magic Defense", "15", "25", "37", "50", false],
                            ["Attack Speed", "1.06", "1.12", "1.19", "1.27", false],
                            ["HP Regen", "7.4", "9.2", "11.4", "13.6", false],
                            ["Energy", "100", "100", "100", "100", false],
                            ["Energy Regen", "4", "4", "4", "4", false]
                        ]},
                    growth: [
                        { stat: "HP Growth", value: "~171.5 HP/level", note: "Pertumbuhan Sangat Baik" },
                        { stat: "Physical ATK Growth", value: "~9.6 ATK/level", note: "Pertumbuhan Damage Tertinggi" },
                        { stat: "Physical Defense", value: "~4.1/level", note: "Tahanan Fisik Kuat" },
                        { stat: "Magic Defense", value: "+2.5/level", note: "Pertumbuhan Stabil" },
                        { stat: "Attack Speed", value: "+0.015/level", note: "Peningkatan Signifikan" },
                        { stat: "HP Regen", value: "~0.44/level", note: "Sustain Sangat Baik" },
                        { stat: "Energy", value: "Statis (100)", note: "Tidak Ada Pertumbuhan" },
                        { stat: "Energy Regen", value: "Statis (4)", note: "Tidak Ada Pertumbuhan" }
                    ],
                    conclusion: ["~171.5 HP - Memberikan durability yang baik untuk seorang assassin.", "~9.6 Physical ATK - Pertumbuhan damage fisik tertinggi di antara semua hero yang dianalisis, sangat mematikan untuk burst damage.", "~4.1 Physical Defense - Membantunya bertahan dari serangan fisik.", "+2.5 Magic Defense - Pertumbuhan defensif magis yang standar.", "+0.015 Attack Speed - Peningkatan kecepatan serang yang konsisten.", "~0.44 HP Regen - Memberikan kemampuan sustain yang sangat baik.", "Energy & Energy Regen - Stat ini tidak bertambah seiring level, tetap statis di 100 dan 4."]
                },
                lancelot: {
                    name: "Lancelot", icon: "🗡️",
                    stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                        rows: [
                            ["HP", "2390", "3038", "3848", "4658", false],
                            ["Physical ATK", "124", "171", "230", "289", true],
                            ["Physical Defense", "16", "32", "52", "72", false],
                            ["Magic Defense", "15", "25", "37", "50", false],
                            ["Attack Speed", "1.08", "1.14", "1.21", "1.29", false],
                            ["HP Regen", "7.0", "8.8", "11.0", "13.2", false],
                            ["Mana", "500", "900", "1400", "1900", false],
                            ["Mana Regen", "4.0", "4.8", "5.8", "6.8", false]
                        ]},
                    growth: [
                        { stat: "HP Growth", value: "~162 HP/level", note: "Pertumbuhan Sangat Baik" },
                        { stat: "Physical ATK Growth", value: "~11.8 ATK/level", note: "Pertumbuhan Damage Luar Biasa" },
                        { stat: "Physical Defense", value: "+4/level", note: "Tahanan Fisik Kuat" },
                        { stat: "Magic Defense", value: "+2.5/level", note: "Pertumbuhan Stabil" },
                        { stat: "Attack Speed", value: "+0.015/level", note: "Peningkatan Signifikan" },
                        { stat: "HP Regen", value: "~0.44/level", note: "Sustain Sangat Baik" },
                        { stat: "Mana", value: "+100/level", note: "Pertumbuhan Tepat" },
                        { stat: "Mana Regen", value: "+0.2/level", note: "Pertumbuhan Stabil" }
                    ],
                    conclusion: ["~162 HP - Memberikan durability yang baik untuk seorang assassin.", "~11.8 Physical ATK - Pertumbuhan damage fisik tertinggi di antara semua hero yang dianalisis, sangat luar biasa dan mematikan.", "+4 Physical Defense - Membantunya bertahan dari serangan fisik.", "+2.5 Magic Defense - Pertumbuhan defensif magis yang standar.", "+0.015 Attack Speed - Peningkatan kecepatan serang yang konsisten.", "~0.44 HP Regen - Memberikan kemampuan sustain yang sangat baik.", "+100 Mana - Memastikan ketersediaan mana untuk spam skill.", "+0.2 Mana Regen - Regenerasi mana yang stabil."]
                },
                arlott: {
                    name: "Arlott", icon: "🔥",
                    stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                        rows: [
                            ["HP", "2450", "3310", "4385", "5460", false],
                            ["Physical ATK", "120", "160", "210", "260", true],
                            ["Physical Defense", "21", "38", "60", "82", false],
                            ["Magic Defense", "15", "25", "37", "50", false],
                            ["Attack Speed", "1.09", "1.13", "1.18", "1.23", false],
                            ["HP Regen", "8.0", "9.8", "12.0", "14.2", false]
                        ]},
                    growth: [
                        { stat: "HP Growth", value: "~215 HP/level", note: "Pertumbuhan Sangat Tinggi" },
                        { stat: "Physical ATK Growth", value: "+10 ATK/level", note: "Pertumbuhan Damage Sangat Tinggi" },
                        { stat: "Physical Defense", value: "~4.4/level", note: "Tahanan Fisik Kuat" },
                        { stat: "Magic Defense", value: "+2.5/level", note: "Pertumbuhan Stabil" },
                        { stat: "Attack Speed", value: "+0.01/level", note: "Peningkatan Stabil" },
                        { stat: "HP Regen", value: "~0.44/level", note: "Sustain Sangat Baik" }
                    ],
                    conclusion: ["~215 HP - Pertumbuhan HP yang sangat tinggi, memberinya durability luar biasa.", "+10 Physical ATK - Pertumbuhan damage fisik yang sangat tinggi, kedua setelah Lancelot.", "~4.4 Physical Defense - Pertumbuhan pertahanan fisik yang kuat.", "+2.5 Magic Defense - Pertumbuhan defensif magis yang standar.", "+0.01 Attack Speed - Peningkatan kecepatan serang yang stabil.", "~0.44 HP Regen - Memberikan kemampuan sustain yang sangat baik."]
                },
                benedetta: {
                    name: "Benedetta", icon: "⚔️",
                    stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                        rows: [
                            ["HP", "2410", "3122", "4012", "4902", false],
                            ["Physical ATK", "113", "154", "205", "256", true],
                            ["Physical Defense", "18", "34", "54", "74", false],
                            ["Magic Defense", "15", "25", "37", "50", false],
                            ["Attack Speed", "1.10", "1.18", "1.28", "1.38", false],
                            ["HP Regen", "6.6", "8.4", "10.6", "12.8", false],
                            ["Mana", "500", "900", "1400", "1900", false],
                            ["Mana Regen", "4.0", "4.8", "5.8", "6.8", false]
                        ]},
                    growth: [
                        { stat: "HP Growth", value: "~178 HP/level", note: "Pertumbuhan Sangat Baik" },
                        { stat: "Physical ATK Growth", value: "~10.2 ATK/level", note: "Pertumbuhan Damage Sangat Tinggi" },
                        { stat: "Physical Defense", value: "+4/level", note: "Tahanan Fisik Kuat" },
                        { stat: "Magic Defense", value: "+2.5/level", note: "Pertumbuhan Stabil" },
                        { stat: "Attack Speed", value: "+0.02/level", note: "Peningkatan Signifikan" },
                        { stat: "HP Regen", value: "~0.44/level", note: "Sustain Sangat Baik" },
                        { stat: "Mana", value: "+100/level", note: "Pertumbuhan Tepat" },
                        { stat: "Mana Regen", value: "+0.2/level", note: "Pertumbuhan Stabil" }
                    ],
                    conclusion: ["~178 HP - Memberikan durability yang sangat baik.", "~10.2 Physical ATK - Pertumbuhan damage fisik yang sangat tinggi, ketiga setelah Lancelot dan Hayabusa.", "+4 Physical Defense - Pertumbuhan pertahanan fisik yang kuat.", "+2.5 Magic Defense - Pertumbuhan defensif magis yang standar.", "+0.02 Attack Speed - Peningkatan kecepatan serang yang signifikan.", "~0.44 HP Regen - Memberikan kemampuan sustain yang sangat baik.", "+100 Mana - Memastikan ketersediaan mana untuk skill.", "+0.2 Mana Regen - Regenerasi mana yang stabil."]
                },
                suyou: {
                    name: "Suyou", icon: "🗡️",
                    stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                        rows: [
                            ["HP", "2390", "3038", "3848", "4658", false],
                            ["Physical ATK", "124", "171", "230", "289", true],
                            ["Physical Defense", "16", "32", "52", "72", false],
                            ["Magic Defense", "15", "25", "37", "50", false],
                            ["Attack Speed", "1.08", "1.16", "1.26", "1.36", false],
                            ["HP Regen", "7.0", "8.8", "11.0", "13.2", false]
                        ]},
                    growth: [
                        { stat: "HP Growth", value: "~162 HP/level", note: "Pertumbuhan Sangat Baik" },
                        { stat: "Physical ATK Growth", value: "~11.8 ATK/level", note: "Pertumbuhan Damage Luar Biasa" },
                        { stat: "Physical Defense", value: "+4/level", note: "Tahanan Fisik Kuat" },
                        { stat: "Magic Defense", value: "+2.5/level", note: "Pertumbuhan Stabil" },
                        { stat: "Attack Speed", value: "+0.02/level", note: "Peningkatan Signifikan" },
                        { stat: "HP Regen", value: "~0.44/level", note: "Sustain Sangat Baik" }
                    ],
                    conclusion: ["~162 HP - Memberikan durability yang baik.", "~11.8 Physical ATK - Pertumbuhan damage fisik tertinggi bersama Lancelot, sangat luar biasa dan mematikan.", "+4 Physical Defense - Membantunya bertahan dari serangan fisik.", "+2.5 Magic Defense - Pertumbuhan defensif magis yang standar.", "+0.02 Attack Speed - Peningkatan kecepatan serang yang signifikan.", "~0.44 HP Regen - Memberikan kemampuan sustain yang sangat baik."]
                },
                ling: {
                    name: "Ling", icon: "🐉",
                    stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                        rows: [
                            ["HP", "2369", "2969", "3719", "4469", false],
                            ["Physical ATK", "125", "149", "179", "209", true],
                            ["Physical Defense", "18", "36", "58", "81", false],
                            ["Magic Defense", "15", "25", "37", "50", false],
                            ["Attack Speed", "1.01", "1.09", "1.19", "1.29", false],
                            ["HP Regen", "7.8", "9.6", "11.8", "14.0", false],
                            ["Energy", "100", "100", "100", "100", false],
                            ["Energy Regen", "4", "4", "4", "4", false]
                        ]},
                    growth: [
                        { stat: "HP Growth", value: "+150 HP/level", note: "Pertumbuhan Stabil & Linear" },
                        { stat: "Physical ATK Growth", value: "+6 ATK/level", note: "Pertumbuhan Damage Konsisten" },
                        { stat: "Physical Defense", value: "+4.5/level", note: "Tahanan Fisik Sangat Kuat" },
                        { stat: "Magic Defense", value: "+2.5/level", note: "Pertumbuhan Stabil" },
                        { stat: "Attack Speed", value: "+0.02/level", note: "Peningkatan Signifikan" },
                        { stat: "HP Regen", value: "~0.44/level", note: "Sustain Sangat Baik" },
                        { stat: "Energy", value: "Statis (100)", note: "Tidak Ada Pertumbuhan" },
                        { stat: "Energy Regen", value: "Statis (4)", note: "Tidak Ada Pertumbuhan" }
                    ],
                    conclusion: ["+150 HP - Pertumbuhan HP yang stabil dan linear.", "+6 Physical ATK - Pertumbuhan damage yang konsisten, meskipun tidak setinggi assassin murni lainnya.", "+4.5 Physical Defense - Pertumbuhan pertahanan fisik tertinggi di antara semua hero yang dianalisis, membuatnya sangat sulit dibunuh oleh serangan fisik.", "+2.5 Magic Defense - Pertumbuhan defensif magis yang standar.", "+0.02 Attack Speed - Peningkatan kecepatan serang yang signifikan.", "~0.44 HP Regen - Memberikan kemampuan sustain yang sangat baik.", "Energy & Energy Regen - Stat ini tidak bertambah seiring level, tetap statis di 100 dan 4."]
                },
                selena: {
                    name: "Selena", icon: "🕷️",
                    stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                        rows: [
                            ["HP", "2280", "3068", "4053", "5038", false],
                            ["Physical ATK", "110", "137", "170", "204", true],
                            ["Physical Defense", "15", "31", "51", "72", false],
                            ["Magic Defense", "15", "25", "37", "50", false],
                            ["Attack Speed", "1.00", "1.06", "1.13", "1.21", false],
                            ["HP Regen", "6.8", "8.0", "9.4", "11.0", false],
                            ["Mana", "500", "900", "1400", "1900", false],
                            ["Mana Regen", "4.0", "4.8", "5.8", "6.8", false]
                        ]},
                    growth: [
                        { stat: "HP Growth", value: "~197 HP/level", note: "Pertumbuhan Sangat Tinggi" },
                        { stat: "Physical ATK Growth", value: "~6.7 ATK/level", note: "Pertumbuhan Damage Konsisten" },
                        { stat: "Physical Defense", value: "~4.1/level", note: "Tahanan Fisik Kuat" },
                        { stat: "Magic Defense", value: "+2.5/level", note: "Pertumbuhan Stabil" },
                        { stat: "Attack Speed", value: "+0.015/level", note: "Peningkatan Signifikan" },
                        { stat: "HP Regen", value: "+0.3/level", note: "Sustain Baik" },
                        { stat: "Mana", value: "+100/level", note: "Pertumbuhan Tepat" },
                        { stat: "Mana Regen", value: "+0.2/level", note: "Pertumbuhan Stabil" }
                    ],
                    conclusion: ["~197 HP - Pertumbuhan HP tertinggi kedua setelah Julian, memberikan durability yang luar biasa untuk seorang assassin.", "~6.7 Physical ATK - Pertumbuhan damage yang konsisten, mendukung kemampuan basic attack-nya dalam bentuk elf.", "~4.1 Physical Defense - Pertumbuhan pertahanan fisik yang kuat.", "+2.5 Magic Defense - Pertumbuhan defensif magis yang standar.", "+0.015 Attack Speed - Peningkatan kecepatan serang yang signifikan.", "+0.3 HP Regen - Memberikan kemampuan sustain yang baik.", "+100 Mana - Memastikan ketersediaan mana untuk spam skill.", "+0.2 Mana Regen - Regenerasi mana yang stabil."]
                },
                harley: {
                    name: "Harley", icon: "🎩",
                    stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                        rows: [
                            ["HP", "2380", "2960", "3685", "4410", false],
                            ["Physical ATK", "114", "139", "170", "201", true],
                            ["Physical Defense", "19", "34", "53", "72", false],
                            ["Magic Defense", "15", "25", "37", "50", false],
                            ["Attack Speed", "1.06", "1.12", "1.19", "1.27", false],
                            ["HP Regen", "7.2", "8.4", "9.8", "11.4", false],
                            ["Mana", "500", "900", "1400", "1900", false],
                            ["Mana Regen", "4.0", "4.8", "5.8", "6.8", false]
                        ]},
                    growth: [
                        { stat: "HP Growth", value: "~145 HP/level", note: "Pertumbuhan Stabil" },
                        { stat: "Physical ATK Growth", value: "~6.2 ATK/level", note: "Pertumbuhan Damage Konsisten" },
                        { stat: "Physical Defense", value: "~3.8/level", note: "Tahanan Fisik Cukup Baik" },
                        { stat: "Magic Defense", value: "+2.5/level", note: "Pertumbuhan Stabil" },
                        { stat: "Attack Speed", value: "+0.015/level", note: "Peningkatan Signifikan" },
                        { stat: "HP Regen", value: "+0.3/level", note: "Sustain Baik" },
                        { stat: "Mana", value: "+100/level", note: "Pertumbuhan Tepat" },
                        { stat: "Mana Regen", value: "+0.2/level", note: "Pertumbuhan Stabil" }
                    ],
                    conclusion: ["~145 HP - Pertumbuhan HP yang stabil, memberikan durability dasar yang cukup.", "~6.2 Physical ATK - Pertumbuhan damage yang konsisten, meskipun bukan fokus utamanya.", "~3.8 Physical Defense - Pertumbuhan pertahanan fisik yang cukup baik.", "+2.5 Magic Defense - Pertumbuhan defensif magis yang standar.", "+0.015 Attack Speed - Peningkatan kecepatan serang yang signifikan.", "+0.3 HP Regen - Memberikan kemampuan sustain yang baik.", "+100 Mana - Memastikan ketersediaan mana untuk spam skill.", "+0.2 Mana Regen - Regenerasi mana yang stabil."]
                },
                kadita: {
                    name: "Kadita", icon: "🌊",
                    stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                        rows: [
                            ["HP", "2440", "3100", "3925", "4750", false],
                            ["Physical ATK", "105", "126", "152", "178", true],
                            ["Physical Defense", "18", "34", "54", "74", false],
                            ["Magic Defense", "15", "25", "37", "50", false],
                            ["Attack Speed", "1.00", "1.06", "1.13", "1.21", false],
                            ["HP Regen", "7.2", "8.4", "10.0", "11.6", false],
                            ["Mana", "500", "900", "1400", "1900", false],
                            ["Mana Regen", "4.0", "4.8", "5.8", "6.8", false]
                        ]},
                    growth: [
                        { stat: "HP Growth", value: "~165 HP/level", note: "Pertumbuhan Sangat Baik" },
                        { stat: "Physical ATK Growth", value: "~5.2 ATK/level", note: "Pertumbuhan Damage Standar" },
                        { stat: "Physical Defense", value: "+4/level", note: "Tahanan Fisik Kuat" },
                        { stat: "Magic Defense", value: "+2.5/level", note: "Pertumbuhan Stabil" },
                        { stat: "Attack Speed", value: "+0.015/level", note: "Peningkatan Signifikan" },
                        { stat: "HP Regen", value: "~0.31/level", note: "Sustain Baik" },
                        { stat: "Mana", value: "+100/level", note: "Pertumbuhan Tepat" },
                        { stat: "Mana Regen", value: "+0.2/level", note: "Pertumbuhan Stabil" }
                    ],
                    conclusion: ["~165 HP - Pertumbuhan HP yang sangat baik, memberikan durability lebih dibandingkan mage lainnya.", "~5.2 Physical ATK - Pertumbuhan damage yang standar, bukan fokus utamanya.", "+4 Physical Defense - Pertumbuhan pertahanan fisik yang kuat.", "+2.5 Magic Defense - Pertumbuhan defensif magis yang standar.", "+0.015 Attack Speed - Peningkatan kecepatan serang yang signifikan.", "~0.31 HP Regen - Memberikan kemampuan sustain yang baik.", "+100 Mana - Memastikan ketersediaan mana untuk spam skill.", "+0.2 Mana Regen - Regenerasi mana yang stabil."]
                },
                lesley: {
                    name: "Lesley", icon: "🎯",
                    stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                        rows: [
                            ["HP", "2280", "2840", "3540", "4240", false],
                            ["Physical ATK", "145", "173", "208", "243", true],
                            ["Physical Defense", "14", "30", "51", "72", false],
                            ["Magic Defense", "15", "25", "37", "50", false],
                            ["Attack Speed", "1.04", "1.10", "1.17", "1.25", false],
                            ["HP Regen", "7.2", "8.0", "9.2", "10.4", false],
                            ["Energy", "100", "100", "100", "100", false],
                            ["Movement SPD", "240", "240", "240", "240", false]
                        ]},
                    growth: [
                        { stat: "HP Growth", value: "+140 HP/level", note: "Stabil & Linear" },
                        { stat: "Physical ATK Growth", value: "+7 ATK/level", note: "Sangat Konsisten" },
                        { stat: "Physical Defense", value: "+4.0 - 4.2/level", note: "Rata-rata +4.1" },
                        { stat: "Magic Defense", value: "+2.4 - 2.6/level", note: "Rata-rata +2.5" },
                        { stat: "Attack Speed", value: "+0.015/level", note: "Stabil" },
                        { stat: "HP Regen", value: "+0.2 - 0.24/level", note: "Rata-rata +0.2" }
                    ],
                    conclusion: ["+140 HP", "+7 Physical ATK", "+4.1 Physical Defense", "+2.5 Magic Defense", "+0.015 Attack Speed", "+0.2 HP Regen"]
                },
                yisunshin: {
                    name: "Yi Sun-shin", icon: "⚓",
                    stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                        rows: [
                            ["HP", "2320", "2920", "3670", "4420", false],
                            ["Physical ATK", "110", "142", "182", "222", true],
                            ["Physical Defense", "22", "39", "60", "82", false],
                            ["Magic Defense", "10", "20", "32", "45", false],
                            ["Attack Speed", "1.03", "1.07", "1.12", "1.17", false],
                            ["HP Regen", "7.2", "8.0", "9.2", "10.4", false],
                            ["Mana", "500", "900", "1400", "1900", false],
                            ["Mana Regen", "4.0", "4.8", "5.8", "6.8", false],
                            ["Movement SPD", "250", "250", "250", "250", false]
                        ]},
                    growth: [
                        { stat: "HP Growth", value: "+150 HP/level", note: "Stabil & Linear" },
                        { stat: "Physical ATK Growth", value: "+8 ATK/level", note: "Sangat Konsisten" },
                        { stat: "Physical Defense", value: "+4.2 - 4.4/level", note: "Rata-rata +4.3" },
                        { stat: "Magic Defense", value: "+2.4 - 2.6/level", note: "Rata-rata +2.5" },
                        { stat: "Attack Speed", value: "+0.01/level", note: "Stabil" },
                        { stat: "HP Regen", value: "+0.2/level", note: "Rata-rata +0.2" },
                        { stat: "Mana", value: "+100/level", note: "Tepat +100" },
                        { stat: "Mana Regen", value: "+0.2/level", note: "Tepat +0.2" }
                    ],
                    conclusion: ["+150 HP", "+8 Physical ATK", "+4.3 Physical Defense", "+2.5 Magic Defense", "+0.01 Attack Speed", "+0.2 HP Regen", "+100 Mana", "+0.2 Mana Regen"]
                }
          }, marksman: {
                                beatrix: {
                name: "Beatrix", icon: "🎯",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2280", "2960", "3810", "4660", false],
                        ["Physical ATK", "110", "148", "195", "243", true],
                        ["Physical Defense", "20", "36", "56", "77", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "1.07", "1.17", "1.29", "1.42", false],
                        ["HP Regen", "7.2", "8.0", "9.0", "10.0", false],
                        ["Movement SPD", "257", "257", "257", "257", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+170 HP/level", note: "Stabil & Linear" },
                    { stat: "Physical ATK Growth", value: "+9.5 ATK/level", note: "Rata-rata" },
                    { stat: "Physical Defense", value: "+4.0 - 4.2/level", note: "Rata-rata +4" },
                    { stat: "Magic Defense", value: "+2.4 - 2.6/level", note: "Rata-rata +2.5" },
                    { stat: "Attack Speed", value: "+0.025/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.2/level", note: "Tepat +0.2" }
                ],
                conclusion: ["+170 HP", "+9.5 Physical ATK", "+4 Physical Defense", "+2.5 Magic Defense", "+0.025 Attack Speed", "+0.2 HP Regen"]
            },
            brody: {
                name: "Brody", icon: "🔫",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2290", "2950", "3775", "4600", false],
                        ["Physical ATK", "105", "153", "213", "273", true],
                        ["Physical Defense", "20", "36", "57", "78", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "1.20", "1.40", "1.65", "1.90", false],
                        ["HP Regen", "7.2", "8.0", "9.2", "10.4", false],
                        ["Mana", "500", "900", "1400", "1900", false],
                        ["Mana Regen", "4.0", "4.8", "5.8", "6.8", false],
                        ["Movement SPD", "253", "253", "253", "253", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+165 HP/level", note: "Stabil & Linear" },
                    { stat: "Physical ATK Growth", value: "+12 ATK/level", note: "Sangat Konsisten" },
                    { stat: "Physical Defense", value: "+4.0/level", note: "Tepat +4" },
                    { stat: "Magic Defense", value: "+2.4 - 2.6/level", note: "Rata-rata +2.5" },
                    { stat: "Attack Speed", value: "+0.05/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.2/level", note: "Tepat +0.2" },
                    { stat: "Mana", value: "+100/level", note: "Tepat +100" },
                    { stat: "Mana Regen", value: "+0.2/level", note: "Tepat +0.2" }
                ],
                conclusion: ["+165 HP", "+12 Physical ATK", "+4 Physical Defense", "+2.5 Magic Defense", "+0.05 Attack Speed", "+0.2 HP Regen", "+100 Mana", "+0.2 Mana Regen"]
            },
            ixia: {
                name: "Ixia", icon: "🕷️",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2320", "3000", "3850", "4700", false],
                        ["Physical ATK", "100", "134", "176", "219", true],
                        ["Physical Defense", "17", "33", "53", "74", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "1.04", "1.12", "1.22", "1.32", false],
                        ["HP Regen", "8.0", "8.8", "10.0", "11.0", false],
                        ["Mana", "500", "900", "1400", "1900", false],
                        ["Mana Regen", "4.0", "4.8", "5.8", "6.8", false],
                        ["Movement SPD", "240", "240", "240", "240", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+170 HP/level", note: "Stabil & Linear" },
                    { stat: "Physical ATK Growth", value: "+8.5 ATK/level", note: "Rata-rata" },
                    { stat: "Physical Defense", value: "+4.0 - 4.2/level", note: "Rata-rata +4" },
                    { stat: "Magic Defense", value: "+2.4 - 2.6/level", note: "Rata-rata +2.5" },
                    { stat: "Attack Speed", value: "+0.02/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.2/level", note: "Tepat +0.2" },
                    { stat: "Mana", value: "+100/level", note: "Tepat +100" },
                    { stat: "Mana Regen", value: "+0.2/level", note: "Tepat +0.2" }
                ],
                conclusion: ["+170 HP", "+8.5 Physical ATK", "+4 Physical Defense", "+2.5 Magic Defense", "+0.02 Attack Speed", "+0.2 HP Regen", "+100 Mana", "+0.2 Mana Regen"]
            },
            claude: {
                name: "Claude", icon: "🐵",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2250", "2782", "3447", "4112", false],
                        ["Physical ATK", "100", "128", "163", "198", true],
                        ["Physical Defense", "14", "29", "49", "68", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "1.03", "1.09", "1.16", "1.24", false],
                        ["HP Regen", "8.0", "8.8", "10.0", "11.2", false],
                        ["Movement SPD", "240", "240", "240", "240", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+133 HP/level", note: "Stabil & Linear" },
                    { stat: "Physical ATK Growth", value: "+7 ATK/level", note: "Sangat Konsisten" },
                    { stat: "Physical Defense", value: "+3.8 - 4.0/level", note: "Rata-rata +3.8" },
                    { stat: "Magic Defense", value: "+2.4 - 2.6/level", note: "Rata-rata +2.5" },
                    { stat: "Attack Speed", value: "+0.015/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.2/level", note: "Tepat +0.2" }
                ],
                conclusion: ["+133 HP", "+7 Physical ATK", "+3.8 Physical Defense", "+2.5 Magic Defense", "+0.015 Attack Speed", "+0.2 HP Regen"]
            },
            melissa: {
                name: "Melissa", icon: "🧸",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2288", "2928", "3728", "4528", false],
                        ["Physical ATK", "123", "151", "186", "221", true],
                        ["Physical Defense", "18", "35", "56", "78", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "0.94", "0.98", "1.03", "1.08", false],
                        ["HP Regen", "6.6", "7.4", "8.6", "9.6", false],
                        ["Mana", "500", "900", "1400", "1900", false],
                        ["Mana Regen", "4.0", "4.8", "5.8", "6.8", false],
                        ["Movement SPD", "240", "240", "240", "240", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+160 HP/level", note: "Stabil & Linear" },
                    { stat: "Physical ATK Growth", value: "+7 ATK/level", note: "Sangat Konsisten" },
                    { stat: "Physical Defense", value: "+4.2 - 4.4/level", note: "Rata-rata +4.3" },
                    { stat: "Magic Defense", value: "+2.4 - 2.6/level", note: "Rata-rata +2.5" },
                    { stat: "Attack Speed", value: "+0.01/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.2/level", note: "Rata-rata +0.2" },
                    { stat: "Mana", value: "+100/level", note: "Tepat +100" },
                    { stat: "Mana Regen", value: "+0.2/level", note: "Tepat +0.2" }
                ],
                conclusion: ["+160 HP", "+7 Physical ATK", "+4.3 Physical Defense", "+2.5 Magic Defense", "+0.01 Attack Speed", "+0.2 HP Regen", "+100 Mana", "+0.2 Mana Regen"]
            },
            irithel: {
                name: "Irithel", icon: "🐆",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2300", "2940", "3740", "4540", false],
                        ["Physical ATK", "125", "159", "201", "244", true],
                        ["Physical Defense", "17", "34", "55", "77", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "1.03", "1.09", "1.16", "1.24", false],
                        ["HP Regen", "7.0", "7.8", "9.0", "10.2", false],
                        ["Movement SPD", "260", "260", "260", "260", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+160 HP/level", note: "Stabil & Linear" },
                    { stat: "Physical ATK Growth", value: "+8.5 ATK/level", note: "Rata-rata" },
                    { stat: "Physical Defense", value: "+4.2 - 4.4/level", note: "Rata-rata +4.3" },
                    { stat: "Magic Defense", value: "+2.4 - 2.6/level", note: "Rata-rata +2.5" },
                    { stat: "Attack Speed", value: "+0.015/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.2/level", note: "Rata-rata +0.2" }
                ],
                conclusion: ["+160 HP", "+8.5 Physical ATK", "+4.3 Physical Defense", "+2.5 Magic Defense", "+0.015 Attack Speed", "+0.2 HP Regen"]
            },
            granger: {
                name: "Granger", icon: "🎸",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2260", "2820", "3520", "4220", false],
                        ["Physical ATK", "116", "176", "251", "326", true],
                        ["Physical Defense", "15", "31", "51", "71", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "1.02", "1.08", "1.15", "1.23", false],
                        ["HP Regen", "5.4", "6.2", "7.2", "8.2", false],
                        ["Energy Cap", "800", "800", "800", "800", false],
                        ["Movement SPD", "240", "240", "240", "240", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+140 HP/level", note: "Stabil & Linear" },
                    { stat: "Physical ATK Growth", value: "+15 ATK/level", note: "Sangat Tinggi" },
                    { stat: "Physical Defense", value: "+4.0/level", note: "Tepat +4" },
                    { stat: "Magic Defense", value: "+2.4 - 2.6/level", note: "Rata-rata +2.5" },
                    { stat: "Attack Speed", value: "+0.015/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.2/level", note: "Tepat +0.2" }
                ],
                conclusion: ["+140 HP", "+15 Physical ATK", "+4 Physical Defense", "+2.5 Magic Defense", "+0.015 Attack Speed", "+0.2 HP Regen"]
            },
            moskov: {
                name: "Moskov", icon: "🗡️",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2255", "2827", "3542", "4257", false],
                        ["Physical ATK", "125", "165", "215", "265", true],
                        ["Physical Defense", "16", "33", "54", "76", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "1.01", "1.03", "1.05", "1.08", false],
                        ["HP Regen", "6.4", "7.2", "8.4", "9.4", false],
                        ["Mana", "500", "900", "1400", "1900", false],
                        ["Mana Regen", "4.0", "4.8", "5.8", "6.8", false],
                        ["Movement SPD", "240", "240", "240", "240", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+143 HP/level", note: "Stabil & Linear" },
                    { stat: "Physical ATK Growth", value: "+10 ATK/level", note: "Sangat Konsisten" },
                    { stat: "Physical Defense", value: "+4.2 - 4.4/level", note: "Rata-rata +4.3" },
                    { stat: "Magic Defense", value: "+2.4 - 2.6/level", note: "Rata-rata +2.5" },
                    { stat: "Attack Speed", value: "+0.005/level", note: "Sangat Rendah" },
                    { stat: "HP Regen", value: "+0.2/level", note: "Rata-rata +0.2" },
                    { stat: "Mana", value: "+100/level", note: "Tepat +100" },
                    { stat: "Mana Regen", value: "+0.2/level", note: "Tepat +0.2" }
                ],
                conclusion: ["+143 HP", "+10 Physical ATK", "+4.3 Physical Defense", "+2.5 Magic Defense", "+0.005 Attack Speed", "+0.2 HP Regen", "+100 Mana", "+0.2 Mana Regen"]
            },
            bruno: {
                name: "Bruno", icon: "⚽",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2270", "2910", "3710", "4510", false],
                        ["Physical ATK", "145", "203", "275", "348", true],
                        ["Physical Defense", "17", "34", "55", "77", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "1.01", "1.09", "1.19", "1.29", false],
                        ["HP Regen", "6.0", "6.8", "8.0", "9.0", false],
                        ["Mana", "500", "900", "1400", "1900", false],
                        ["Mana Regen", "4.0", "4.8", "5.8", "6.8", false],
                        ["Movement SPD", "240", "240", "240", "240", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+160 HP/level", note: "Stabil & Linear" },
                    { stat: "Physical ATK Growth", value: "+14.5 ATK/level", note: "Sangat Tinggi" },
                    { stat: "Physical Defense", value: "+4.2 - 4.4/level", note: "Rata-rata +4.3" },
                    { stat: "Magic Defense", value: "+2.4 - 2.6/level", note: "Rata-rata +2.5" },
                    { stat: "Attack Speed", value: "+0.02/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.2/level", note: "Rata-rata +0.2" },
                    { stat: "Mana", value: "+100/level", note: "Tepat +100" },
                    { stat: "Mana Regen", value: "+0.2/level", note: "Tepat +0.2" }
                ],
                conclusion: ["+160 HP", "+14.5 Physical ATK", "+4.3 Physical Defense", "+2.5 Magic Defense", "+0.02 Attack Speed", "+0.2 HP Regen", "+100 Mana", "+0.2 Mana Regen"]
            },
            natan: {
                name: "Natan", icon: "⏳",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2285", "2925", "3725", "4525", false],
                        ["Physical ATK", "107", "155", "215", "275", true],
                        ["Physical Defense", "17", "33", "54", "75", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "0.87", "0.91", "0.96", "1.01", false],
                        ["HP Regen", "6.0", "6.8", "8.0", "9.0", false],
                        ["Mana", "500", "900", "1400", "1900", false],
                        ["Mana Regen", "4.0", "4.8", "5.8", "6.8", false],
                        ["Movement SPD", "245", "245", "245", "245", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+160 HP/level", note: "Stabil & Linear" },
                    { stat: "Physical ATK Growth", value: "+12 ATK/level", note: "Sangat Konsisten" },
                    { stat: "Physical Defense", value: "+4.0 - 4.2/level", note: "Rata-rata +4.1" },
                    { stat: "Magic Defense", value: "+2.4 - 2.6/level", note: "Rata-rata +2.5" },
                    { stat: "Attack Speed", value: "+0.01/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.2/level", note: "Rata-rata +0.2" },
                    { stat: "Mana", value: "+100/level", note: "Tepat +100" },
                    { stat: "Mana Regen", value: "+0.2/level", note: "Tepat +0.2" }
                ],
                conclusion: ["+160 HP", "+12 Physical ATK", "+4.1 Physical Defense", "+2.5 Magic Defense", "+0.01 Attack Speed", "+0.2 HP Regen", "+100 Mana", "+0.2 Mana Regen"]
            },
            wanwan: {
                name: "Wanwan", icon: "🐯",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2300", "2900", "3650", "4400", false],
                        ["Physical ATK", "110", "138", "173", "208", true],
                        ["Physical Defense", "15", "31", "51", "71", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "1.08", "1.16", "1.26", "1.36", false],
                        ["HP Regen", "5.4", "6.2", "7.2", "8.2", false],
                        ["Mana", "500", "900", "1400", "1900", false],
                        ["Mana Regen", "4.0", "4.8", "5.8", "6.8", false],
                        ["Movement SPD", "245", "245", "245", "245", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+150 HP/level", note: "Stabil & Linear" },
                    { stat: "Physical ATK Growth", value: "+7 ATK/level", note: "Sangat Konsisten" },
                    { stat: "Physical Defense", value: "+4.0/level", note: "Tepat +4" },
                    { stat: "Magic Defense", value: "+2.4 - 2.6/level", note: "Rata-rata +2.5" },
                    { stat: "Attack Speed", value: "+0.02/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.2/level", note: "Tepat +0.2" },
                    { stat: "Mana", value: "+100/level", note: "Tepat +100" },
                    { stat: "Mana Regen", value: "+0.2/level", note: "Tepat +0.2" }
                ],
                conclusion: ["+150 HP", "+7 Physical ATK", "+4 Physical Defense", "+2.5 Magic Defense", "+0.02 Attack Speed", "+0.2 HP Regen", "+100 Mana", "+0.2 Mana Regen"]
            },
            miya: {
                name: "Miya", icon: "🏹",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2225", "2837", "3602", "4367", false],
                        ["Physical ATK", "115", "147", "187", "227", true],
                        ["Physical Defense", "17", "33", "53", "74", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "1.06", "1.16", "1.28", "1.41", false],
                        ["HP Regen", "6.0", "6.8", "8.0", "9.0", false],
                        ["Mana", "500", "900", "1400", "1900", false],
                        ["Mana Regen", "4.0", "4.8", "5.8", "6.8", false],
                        ["Movement SPD", "240", "240", "240", "240", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+153 HP/level", note: "Stabil & Linear" },
                    { stat: "Physical ATK Growth", value: "+8 ATK/level", note: "Sangat Konsisten" },
                    { stat: "Physical Defense", value: "+4.0 - 4.2/level", note: "Rata-rata +4.1" },
                    { stat: "Magic Defense", value: "+2.4 - 2.6/level", note: "Rata-rata +2.5" },
                    { stat: "Attack Speed", value: "+0.025/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.2/level", note: "Rata-rata +0.2" },
                    { stat: "Mana", value: "+100/level", note: "Tepat +100" },
                    { stat: "Mana Regen", value: "+0.2/level", note: "Tepat +0.2" }
                ],
                conclusion: ["+153 HP", "+8 Physical ATK", "+4.1 Physical Defense", "+2.5 Magic Defense", "+0.025 Attack Speed", "+0.2 HP Regen", "+100 Mana", "+0.2 Mana Regen"]
            },
            clint: {
                name: "Clint", icon: "🤠",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2285", "2865", "3590", "4315", false],
                        ["Physical ATK", "120", "168", "228", "288", true],
                        ["Physical Defense", "20", "37", "58", "80", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "1.05", "1.15", "1.27", "1.40", false],
                        ["HP Regen", "7.2", "8.0", "9.2", "10.2", false],
                        ["Mana", "500", "900", "1400", "1900", false],
                        ["Mana Regen", "4.0", "4.8", "5.8", "6.8", false],
                        ["Movement SPD", "240", "240", "240", "240", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+145 HP/level", note: "Stabil & Linear" },
                    { stat: "Physical ATK Growth", value: "+12 ATK/level", note: "Sangat Konsisten" },
                    { stat: "Physical Defense", value: "+4.2 - 4.4/level", note: "Rata-rata +4.3" },
                    { stat: "Magic Defense", value: "+2.4 - 2.6/level", note: "Rata-rata +2.5" },
                    { stat: "Attack Speed", value: "+0.025/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.2/level", note: "Rata-rata +0.2" },
                    { stat: "Mana", value: "+100/level", note: "Tepat +100" },
                    { stat: "Mana Regen", value: "+0.2/level", note: "Tepat +0.2" }
                ],
                conclusion: ["+145 HP", "+12 Physical ATK", "+4.3 Physical Defense", "+2.5 Magic Defense", "+0.025 Attack Speed", "+0.2 HP Regen", "+100 Mana", "+0.2 Mana Regen"]
            },
            lesley: {
                name: "Lesley", icon: "🎯",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2280", "2840", "3540", "4240", false],
                        ["Physical ATK", "145", "173", "208", "243", true],
                        ["Physical Defense", "14", "30", "51", "72", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "1.04", "1.10", "1.17", "1.25", false],
                        ["HP Regen", "7.2", "8.0", "9.2", "10.4", false],
                        ["Energy", "100", "100", "100", "100", false],
                        ["Movement SPD", "240", "240", "240", "240", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+140 HP/level", note: "Stabil & Linear" },
                    { stat: "Physical ATK Growth", value: "+7 ATK/level", note: "Sangat Konsisten" },
                    { stat: "Physical Defense", value: "+4.0 - 4.2/level", note: "Rata-rata +4.1" },
                    { stat: "Magic Defense", value: "+2.4 - 2.6/level", note: "Rata-rata +2.5" },
                    { stat: "Attack Speed", value: "+0.015/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.2 - 0.24/level", note: "Rata-rata +0.2" }
                ],
                conclusion: ["+140 HP", "+7 Physical ATK", "+4.1 Physical Defense", "+2.5 Magic Defense", "+0.015 Attack Speed", "+0.2 HP Regen"]
            },
            layla: {
                name: "Layla", icon: "🔫",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2250", "2858", "3618", "4378", false],
                        ["Physical ATK", "133", "173", "223", "273", true],
                        ["Physical Defense", "15", "31", "51", "71", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "1.06", "1.14", "1.24", "1.34", false],
                        ["HP Regen", "5.4", "6.2", "7.2", "8.2", false],
                        ["Mana", "500", "900", "1400", "1900", false],
                        ["Mana Regen", "4.0", "4.8", "5.8", "6.8", false],
                        ["Movement SPD", "240", "240", "240", "240", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+152 HP/level", note: "Stabil & Linear" },
                    { stat: "Physical ATK Growth", value: "+10 ATK/level", note: "Sangat Konsisten" },
                    { stat: "Physical Defense", value: "+4.0/level", note: "Tepat +4" },
                    { stat: "Magic Defense", value: "+2.4 - 2.6/level", note: "Rata-rata +2.5" },
                    { stat: "Attack Speed", value: "+0.02/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.2/level", note: "Rata-rata +0.2" },
                    { stat: "Mana", value: "+100/level", note: "Tepat +100" },
                    { stat: "Mana Regen", value: "+0.2/level", note: "Tepat +0.2" }
                ],
                conclusion: ["+152 HP", "+10 Physical ATK", "+4 Physical Defense", "+2.5 Magic Defense", "+0.02 Attack Speed", "+0.2 HP Regen", "+100 Mana", "+0.2 Mana Regen"]
            },
            karrie: {
                name: "Karrie", icon: "🦋",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2278", "2938", "3763", "4588", false],
                        ["Physical ATK", "120", "170", "232", "295", true],
                        ["Physical Defense", "17", "34", "55", "77", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "1.04", "1.12", "1.22", "1.32", false],
                        ["HP Regen", "8.0", "8.8", "10.0", "11.0", false],
                        ["Mana", "500", "900", "1400", "1900", false],
                        ["Mana Regen", "4.0", "4.8", "5.8", "6.8", false],
                        ["Movement SPD", "240", "240", "240", "240", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+165 HP/level", note: "Stabil & Linear" },
                    { stat: "Physical ATK Growth", value: "+12.5 ATK/level", note: "Sangat Konsisten" },
                    { stat: "Physical Defense", value: "+4.2 - 4.4/level", note: "Rata-rata +4.3" },
                    { stat: "Magic Defense", value: "+2.4 - 2.6/level", note: "Rata-rata +2.5" },
                    { stat: "Attack Speed", value: "+0.02/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.2/level", note: "Rata-rata +0.2" },
                    { stat: "Mana", value: "+100/level", note: "Tepat +100" },
                    { stat: "Mana Regen", value: "+0.2/level", note: "Tepat +0.2" }
                ],
                conclusion: ["+165 HP", "+12.5 Physical ATK", "+4.3 Physical Defense", "+2.5 Magic Defense", "+0.02 Attack Speed", "+0.2 HP Regen", "+100 Mana", "+0.2 Mana Regen"]
            },
            roger: {
                name: "Roger", icon: "🐺",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2530", "3204", "4046", "4889", false],
                        ["Physical ATK", "128", "182", "249", "317", true],
                        ["Physical Defense", "22", "39", "60", "82", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "1.05", "1.11", "1.18", "1.26", false],
                        ["HP Regen", "7.2", "8.0", "9.2", "10.2", false],
                        ["Mana", "500", "900", "1400", "1900", false],
                        ["Mana Regen", "4.0", "4.8", "5.8", "6.8", false],
                        ["Movement SPD", "240", "240", "240", "240", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+168.5 HP/level", note: "Stabil & Linear" },
                    { stat: "Physical ATK Growth", value: "+13.5 ATK/level", note: "Sangat Tinggi" },
                    { stat: "Physical Defense", value: "+4.2 - 4.4/level", note: "Rata-rata +4.3" },
                    { stat: "Magic Defense", value: "+2.4 - 2.6/level", note: "Rata-rata +2.5" },
                    { stat: "Attack Speed", value: "+0.015/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.2/level", note: "Rata-rata +0.2" },
                    { stat: "Mana", value: "+100/level", note: "Tepat +100" },
                    { stat: "Mana Regen", value: "+0.2/level", note: "Tepat +0.2" }
                ],
                conclusion: ["+168.5 HP", "+13.5 Physical ATK", "+4.3 Physical Defense", "+2.5 Magic Defense", "+0.015 Attack Speed", "+0.2 HP Regen", "+100 Mana", "+0.2 Mana Regen"]
            },
            yisunshin: {
                name: "Yi Sun-shin", icon: "⚓",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2320", "2920", "3670", "4420", false],
                        ["Physical ATK", "110", "142", "182", "222", true],
                        ["Physical Defense", "22", "39", "60", "82", false],
                        ["Magic Defense", "10", "20", "32", "45", false],
                        ["Attack Speed", "1.03", "1.07", "1.12", "1.17", false],
                        ["HP Regen", "7.2", "8.0", "9.2", "10.4", false],
                        ["Mana", "500", "900", "1400", "1900", false],
                        ["Mana Regen", "4.0", "4.8", "5.8", "6.8", false],
                        ["Movement SPD", "250", "250", "250", "250", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+150 HP/level", note: "Stabil & Linear" },
                    { stat: "Physical ATK Growth", value: "+8 ATK/level", note: "Sangat Konsisten" },
                    { stat: "Physical Defense", value: "+4.2 - 4.4/level", note: "Rata-rata +4.3" },
                    { stat: "Magic Defense", value: "+2.4 - 2.6/level", note: "Rata-rata +2.5" },
                    { stat: "Attack Speed", value: "+0.01/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.2/level", note: "Rata-rata +0.2" },
                    { stat: "Mana", value: "+100/level", note: "Tepat +100" },
                    { stat: "Mana Regen", value: "+0.2/level", note: "Tepat +0.2" }
                ],
                conclusion: ["+150 HP", "+8 Physical ATK", "+4.3 Physical Defense", "+2.5 Magic Defense", "+0.01 Attack Speed", "+0.2 HP Regen", "+100 Mana", "+0.2 Mana Regen"]
            },
            hanabi: {
                name: "Hanabi", icon: "🌸",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2260", "2772", "3412", "4052", false],
                        ["Physical ATK", "111", "151", "201", "251", true],
                        ["Physical Defense", "17", "33", "53", "74", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "1.06", "1.16", "1.28", "1.41", false],
                        ["HP Regen", "6.0", "6.8", "8.0", "9.0", false],
                        ["Mana", "500", "900", "1400", "1900", false],
                        ["Mana Regen", "4.0", "4.8", "5.8", "6.8", false],
                        ["Movement SPD", "245", "245", "245", "245", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+128 HP/level", note: "Stabil & Linear" },
                    { stat: "Physical ATK Growth", value: "+10 ATK/level", note: "Sangat Konsisten" },
                    { stat: "Physical Defense", value: "+4.0 - 4.2/level", note: "Rata-rata +4.1" },
                    { stat: "Magic Defense", value: "+2.4 - 2.6/level", note: "Rata-rata +2.5" },
                    { stat: "Attack Speed", value: "+0.025/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.2/level", note: "Rata-rata +0.2" },
                    { stat: "Mana", value: "+100/level", note: "Tepat +100" },
                    { stat: "Mana Regen", value: "+0.2/level", note: "Tepat +0.2" }
                ],
                conclusion: ["+128 HP", "+10 Physical ATK", "+4.1 Physical Defense", "+2.5 Magic Defense", "+0.025 Attack Speed", "+0.2 HP Regen", "+100 Mana", "+0.2 Mana Regen"]
            },
            kimmy: {
                name: "Kimmy", icon: "🔫",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2380", "2960", "3685", "4410", false],
                        ["Physical ATK", "100", "140", "190", "240", true],
                        ["Physical Defense", "17", "33", "53", "73", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "1.00", "1.00", "1.00", "1.00", false],
                        ["HP Regen", "8.0", "8.8", "10.0", "11.2", false],
                        ["Energy", "100", "100", "100", "100", false],
                        ["Movement SPD", "245", "245", "245", "245", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+145 HP/level", note: "Stabil & Linear" },
                    { stat: "Physical ATK Growth", value: "+10 ATK/level", note: "Sangat Konsisten" },
                    { stat: "Physical Defense", value: "+4.0/level", note: "Tepat +4" },
                    { stat: "Magic Defense", value: "+2.4 - 2.6/level", note: "Rata-rata +2.5" },
                    { stat: "Attack Speed", value: "0/level", note: "Tidak Bertambah" },
                    { stat: "HP Regen", value: "+0.2 - 0.24/level", note: "Rata-rata +0.2" }
                ],
                conclusion: ["+145 HP", "+10 Physical ATK", "+4 Physical Defense", "+2.5 Magic Defense", "0 Attack Speed (Fixed Base)", "+0.2 HP Regen"]
            },
            popol: {
                name: "Popol & Kupa", icon: "🐺",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2300", "2860", "3560", "4260", false],
                        ["Physical ATK", "100", "128", "163", "198", true],
                        ["Physical Defense", "17", "31", "49", "67", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "1.00", "1.04", "1.09", "1.14", false],
                        ["HP Regen", "6.0", "6.8", "8.0", "9.0", false],
                        ["Mana", "500", "900", "1400", "1900", false],
                        ["Mana Regen", "4.0", "4.8", "5.8", "6.8", false],
                        ["Movement SPD", "250", "250", "250", "250", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+140 HP/level", note: "Stabil & Linear" },
                    { stat: "Physical ATK Growth", value: "+7 ATK/level", note: "Sangat Konsisten" },
                    { stat: "Physical Defense", value: "+3.5 - 3.6/level", note: "Rata-rata +3.6" },
                    { stat: "Magic Defense", value: "+2.4 - 2.6/level", note: "Rata-rata +2.5" },
                    { stat: "Attack Speed", value: "+0.01/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.2/level", note: "Rata-rata +0.2" },
                    { stat: "Mana", value: "+100/level", note: "Tepat +100" },
                    { stat: "Mana Regen", value: "+0.2/level", note: "Tepat +0.2" }
                ],
                conclusion: ["+140 HP", "+7 Physical ATK", "+3.6 Physical Defense", "+2.5 Magic Defense", "+0.01 Attack Speed", "+0.2 HP Regen", "+100 Mana", "+0.2 Mana Regen"]
            },
            edith: {
                name: "Edith", icon: "🛡️",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2440", "3340", "4465", "5590", false],
                        ["Physical ATK", "110", "133", "161", "190", true],
                        ["Physical Defense", "17", "44", "78", "112", false],
                        ["Magic Defense", "15", "31", "51", "71", false],
                        ["Attack Speed", "0.94", "0.94", "0.94", "0.94", false],
                        ["HP Regen", "9.0", "11.4", "14.4", "17.4", false],
                        ["Movement SPD", "255", "255", "255", "255", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+225 HP/level", note: "Sangat Tinggi (Tanky)" },
                    { stat: "Physical ATK Growth", value: "+5.75 ATK/level", note: "Moderat" },
                    { stat: "Physical Defense", value: "+6.8/level", note: "Sangat Tinggi" },
                    { stat: "Magic Defense", value: "+4.0/level", note: "Tepat +4" },
                    { stat: "Attack Speed", value: "0/level", note: "Tidak Bertambah" },
                    { stat: "HP Regen", value: "+0.6/level", note: "Sangat Konsisten" }
                ],
                conclusion: ["+225 HP", "+5.75 Physical ATK", "+6.8 Physical Defense", "+4.0 Magic Defense", "0 Attack Speed (Fixed Base)", "+0.6 HP Regen"]
            },
            obsidia: {
                name: "Obsidia", icon: "🕷️",
                stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                    rows: [
                        ["HP", "2320", "2920", "3670", "4420", false],
                        ["Physical ATK", "120", "140", "165", "190", true],
                        ["Physical Defense", "17", "33", "54", "75", false],
                        ["Magic Defense", "15", "25", "37", "50", false],
                        ["Attack Speed", "1.00", "1.04", "1.09", "1.14", false],
                        ["HP Regen", "6.0", "6.8", "8.0", "9.0", false],
                        ["Mana", "500", "900", "1400", "1900", false],
                        ["Mana Regen", "4.0", "4.8", "5.8", "6.8", false],
                        ["Movement SPD", "240", "240", "240", "240", false]
                    ]},
                growth: [
                    { stat: "HP Growth", value: "+150 HP/level", note: "Stabil & Linear" },
                    { stat: "Physical ATK Growth", value: "+5 ATK/level", note: "Sangat Konsisten" },
                    { stat: "Physical Defense", value: "+4.0 - 4.2/level", note: "Rata-rata +4.1" },
                    { stat: "Magic Defense", value: "+2.4 - 2.6/level", note: "Rata-rata +2.5" },
                    { stat: "Attack Speed", value: "+0.01/level", note: "Stabil" },
                    { stat: "HP Regen", value: "+0.2/level", note: "Rata-rata +0.2" },
                    { stat: "Mana", value: "+100/level", note: "Tepat +100" },
                    { stat: "Mana Regen", value: "+0.2/level", note: "Tepat +0.2" }
                ],
                conclusion: ["+150 HP", "+5 Physical ATK", "+4.1 Physical Defense", "+2.5 Magic Defense", "+0.01 Attack Speed", "+0.2 HP Regen", "+100 Mana", "+0.2 Mana Regen"]
            }            
          }, 
          support: {
                angela: {
                        name: "Angela", icon: "🧚",
                        stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                            rows: [
                                ["HP", "2300", "2860", "3560", "4260", false],
                                ["Physical ATK", "115", "144", "180", "216", true],
                                ["Physical Defense", "15", "30", "50", "69", false],
                                ["Magic Defense", "15", "25", "37", "50", false],
                                ["Attack Speed", "0.99", "1.03", "1.08", "1.13", false],
                                ["HP Regen", "6.8", "8.0", "9.4", "11.0", false],
                                ["Mana", "500", "900", "1400", "1900", false],
                                ["Mana Regen", "4.0", "4.8", "5.8", "6.8", false],
                                ["Movement SPD", "240", "240", "240", "240", false]
                            ]},
                        growth: [
                            { stat: "HP Growth", value: "+140 HP/level", note: "Sangat Stabil" },
                            { stat: "Physical ATK Growth", value: "+7.2 ATK/level", note: "Konsisten" },
                            { stat: "Physical Defense", value: "+3.85/level", note: "Rata-rata +3.85" },
                            { stat: "Magic Defense", value: "+2.5/level", note: "Rata-rata +2.5" },
                            { stat: "Attack Speed", value: "+0.01/level", note: "Stabil" },
                            { stat: "HP Regen", value: "+0.3/level", note: "Rata-rata +0.3" },
                            { stat: "Mana", value: "+100/level", note: "Tepat +100" },
                            { stat: "Mana Regen", value: "+0.2/level", note: "Tepat +0.2" }
                        ],
                        conclusion: ["+140 HP", "+7.2 Physical ATK", "+3.85 Physical Defense", "+2.5 Magic Defense", "+0.01 Attack Speed", "+0.3 HP Regen", "+100 Mana", "+0.2 Mana Regen"]
                    },
                    rafaela: {
                        name: "Rafaela", icon: "👼",
                        stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                            rows: [
                                ["HP", "2320", "2892", "3607", "4322", false],
                                ["Physical ATK", "117", "146", "182", "218", true],
                                ["Physical Defense", "15", "31", "51", "71", false],
                                ["Magic Defense", "15", "25", "37", "50", false],
                                ["Attack Speed", "0.99", "1.03", "1.08", "1.13", false],
                                ["HP Regen", "7.2", "8.4", "9.8", "11.4", false],
                                ["Mana", "500", "900", "1400", "1900", false],
                                ["Mana Regen", "4.0", "4.8", "5.8", "6.8", false],
                                ["Movement SPD", "245", "245", "245", "245", false]
                            ]},
                        growth: [
                            { stat: "HP Growth", value: "+143 HP/level", note: "Sangat Stabil" },
                            { stat: "Physical ATK Growth", value: "+7.2 ATK/level", note: "Konsisten" },
                            { stat: "Physical Defense", value: "+4.0/level", note: "Linear Sempurna" },
                            { stat: "Magic Defense", value: "+2.5/level", note: "Rata-rata +2.5" },
                            { stat: "Attack Speed", value: "+0.01/level", note: "Stabil" },
                            { stat: "HP Regen", value: "+0.3/level", note: "Rata-rata +0.3" },
                            { stat: "Mana", value: "+100/level", note: "Tepat +100" },
                            { stat: "Mana Regen", value: "+0.2/level", note: "Tepat +0.2" }
                        ],
                        conclusion: ["+143 HP", "+7.2 Physical ATK", "+4.0 Physical Defense", "+2.5 Magic Defense", "+0.01 Attack Speed", "+0.3 HP Regen", "+100 Mana", "+0.2 Mana Regen"]
                    },
                    floryn: {
                        name: "Floryn", icon: "🌸",
                        stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                            rows: [
                                ["HP", "2280", "2860", "3585", "4310", false],
                                ["Physical ATK", "119", "148", "185", "222", true],
                                ["Physical Defense", "12", "28", "48", "68", false],
                                ["Magic Defense", "15", "25", "37", "50", false],
                                ["Attack Speed", "0.97", "1.01", "1.06", "1.11", false],
                                ["HP Regen", "7.6", "8.8", "10.2", "11.8", false],
                                ["Mana", "500", "900", "1400", "1900", false],
                                ["Mana Regen", "4.0", "4.8", "5.8", "6.8", false],
                                ["Movement SPD", "240", "240", "240", "240", false]
                            ]},
                        growth: [
                            { stat: "HP Growth", value: "+145 HP/level", note: "Sangat Stabil" },
                            { stat: "Physical ATK Growth", value: "+7.3 ATK/level", note: "Konsisten" },
                            { stat: "Physical Defense", value: "+4.0/level", note: "Linear Sempurna" },
                            { stat: "Magic Defense", value: "+2.5/level", note: "Rata-rata +2.5" },
                            { stat: "Attack Speed", value: "+0.01/level", note: "Stabil" },
                            { stat: "HP Regen", value: "+0.3/level", note: "Rata-rata +0.3" },
                            { stat: "Mana", value: "+100/level", note: "Tepat +100" },
                            { stat: "Mana Regen", value: "+0.2/level", note: "Tepat +0.2" }
                        ],
                        conclusion: ["+145 HP", "+7.3 Physical ATK", "+4.0 Physical Defense", "+2.5 Magic Defense", "+0.01 Attack Speed", "+0.3 HP Regen", "+100 Mana", "+0.2 Mana Regen"]
                    },
                    diggie: {
                        name: "Diggie", icon: "🦉",
                        stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                            rows: [
                                ["HP", "2347", "2887", "3562", "4237", false],
                                ["Physical ATK", "115", "144", "180", "216", true],
                                ["Physical Defense", "20", "31", "45", "59", false],
                                ["Magic Defense", "15", "25", "37", "50", false],
                                ["Attack Speed", "1.00", "1.04", "1.09", "1.14", false],
                                ["HP Regen", "7.2", "8.4", "9.8", "11.4", false],
                                ["Mana", "500", "900", "1400", "1900", false],
                                ["Mana Regen", "4.0", "4.8", "5.8", "6.8", false],
                                ["Movement SPD", "250", "250", "250", "250", false]
                            ]},
                        growth: [
                            { stat: "HP Growth", value: "+135 HP/level", note: "Sangat Stabil" },
                            { stat: "Physical ATK Growth", value: "+7.2 ATK/level", note: "Konsisten" },
                            { stat: "Physical Defense", value: "+2.8/level", note: "Rata-rata +2.8" },
                            { stat: "Magic Defense", value: "+2.5/level", note: "Rata-rata +2.5" },
                            { stat: "Attack Speed", value: "+0.01/level", note: "Stabil" },
                            { stat: "HP Regen", value: "+0.3/level", note: "Rata-rata +0.3" },
                            { stat: "Mana", value: "+100/level", note: "Tepat +100" },
                            { stat: "Mana Regen", value: "+0.2/level", note: "Tepat +0.2" }
                        ],
                        conclusion: ["+135 HP", "+7.2 Physical ATK", "+2.8 Physical Defense", "+2.5 Magic Defense", "+0.01 Attack Speed", "+0.3 HP Regen", "+100 Mana", "+0.2 Mana Regen"]
                    },
                    marcel: {
                        name: "Marcel", icon: "🎻",
                        stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                            rows: [
                                ["HP", "2740", "3540", "4540", "5540", false],
                                ["Physical ATK", "115", "144", "180", "216", true],
                                ["Physical Defense", "25", "33", "43", "53", false],
                                ["Magic Defense", "15", "19", "24", "29", false],
                                ["Attack Speed", "1.00", "1.04", "1.09", "1.14", false],
                                ["HP Regen", "12.4", "15.2", "18.6", "22.2", false],
                                ["Mana", "500", "900", "1400", "1900", false],
                                ["Mana Regen", "4.0", "4.8", "5.8", "6.8", false],
                                ["Movement SPD", "260", "260", "260", "260", false]
                            ]},
                        growth: [
                            { stat: "HP Growth", value: "+200 HP/level", note: "Sangat Stabil" },
                            { stat: "Physical ATK Growth", value: "+7.2 ATK/level", note: "Konsisten" },
                            { stat: "Physical Defense", value: "+2.0/level", note: "Linear Sempurna" },
                            { stat: "Magic Defense", value: "+1.0/level", note: "Rata-rata +1.0" },
                            { stat: "Attack Speed", value: "+0.01/level", note: "Stabil" },
                            { stat: "HP Regen", value: "+0.7/level", note: "Rata-rata +0.7" },
                            { stat: "Mana", value: "+100/level", note: "Tepat +100" },
                            { stat: "Mana Regen", value: "+0.2/level", note: "Tepat +0.2" }
                        ],
                        conclusion: ["+200 HP", "+7.2 Physical ATK", "+2.0 Physical Defense", "+1.0 Magic Defense", "+0.01 Attack Speed", "+0.7 HP Regen", "+100 Mana", "+0.2 Mana Regen"]
                    },
                    estes: {
                        name: "Estes", icon: "👑",
                        stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                            rows: [
                                ["HP", "2221", "2715", "3332", "3950", false],
                                ["Physical ATK", "120", "149", "185", "221", true],
                                ["Physical Defense", "13", "28", "47", "66", false],
                                ["Magic Defense", "15", "25", "37", "50", false],
                                ["Attack Speed", "1.00", "1.04", "1.09", "1.14", false],
                                ["HP Regen", "7.2", "8.4", "9.8", "11.4", false],
                                ["Mana", "500", "900", "1400", "1900", false],
                                ["Mana Regen", "4.0", "4.8", "5.8", "6.8", false],
                                ["Movement SPD", "240", "240", "240", "240", false]
                            ]},
                        growth: [
                            { stat: "HP Growth", value: "+123.5 HP/level", note: "Sangat Stabil" },
                            { stat: "Physical ATK Growth", value: "+7.2 ATK/level", note: "Konsisten" },
                            { stat: "Physical Defense", value: "+3.8/level", note: "Rata-rata +3.8" },
                            { stat: "Magic Defense", value: "+2.5/level", note: "Rata-rata +2.5" },
                            { stat: "Attack Speed", value: "+0.01/level", note: "Stabil" },
                            { stat: "HP Regen", value: "+0.3/level", note: "Rata-rata +0.3" },
                            { stat: "Mana", value: "+100/level", note: "Tepat +100" },
                            { stat: "Mana Regen", value: "+0.2/level", note: "Tepat +0.2" }
                        ],
                        conclusion: ["+123.5 HP", "+7.2 Physical ATK", "+3.8 Physical Defense", "+2.5 Magic Defense", "+0.01 Attack Speed", "+0.3 HP Regen", "+100 Mana", "+0.2 Mana Regen"]
                    },
                    kalea: {
                        name: "Kalea", icon: "🧜‍♀️",
                        stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                            rows: [
                                ["HP", "2500", "3460", "4660", "5860", false],
                                ["Physical ATK", "126", "163", "209", "255", true],
                                ["Physical Defense", "18", "40", "67", "95", false],
                                ["Magic Defense", "15", "31", "51", "71", false],
                                ["Attack Speed", "1.14", "1.22", "1.32", "1.42", false],
                                ["HP Regen", "7.8", "10.2", "13.2", "16.2", false],
                                ["Movement SPD", "260", "260", "260", "260", false]
                            ]},
                        growth: [
                            { stat: "HP Growth", value: "+240 HP/level", note: "Sangat Tinggi & Stabil" },
                            { stat: "Physical ATK Growth", value: "+9.2 ATK/level", note: "Konsisten" },
                            { stat: "Physical Defense", value: "+5.5/level", note: "Rata-rata +5.5" },
                            { stat: "Magic Defense", value: "+4.0/level", note: "Tepat +4.0" },
                            { stat: "Attack Speed", value: "+0.02/level", note: "Stabil" },
                            { stat: "HP Regen", value: "+0.6/level", note: "Rata-rata +0.6" }
                        ],
                        conclusion: ["+240 HP", "+9.2 Physical ATK", "+5.5 Physical Defense", "+4.0 Magic Defense", "+0.02 Attack Speed", "+0.6 HP Regen"]
                    },
                    chip: {
                        name: "Chip", icon: "🤖",
                        stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                            rows: [
                                ["HP", "2481", "3309", "4344", "5379", false],
                                ["Physical ATK", "112", "139", "173", "207", true],
                                ["Physical Defense", "20", "44", "74", "104", false],
                                ["Magic Defense", "15", "31", "51", "71", false],
                                ["Attack Speed", "1.03", "1.11", "1.21", "1.31", false],
                                ["HP Regen", "8.4", "10.8", "13.8", "16.8", false],
                                ["Mana", "500", "900", "1400", "1900", false],
                                ["Mana Regen", "4.0", "4.8", "5.8", "6.8", false],
                                ["Movement SPD", "260", "260", "260", "260", false]
                            ]},
                        growth: [
                            { stat: "HP Growth", value: "+207 HP/level", note: "Sangat Tinggi (Tanky)" },
                            { stat: "Physical ATK Growth", value: "+6.8 ATK/level", note: "Standar" },
                            { stat: "Physical Defense", value: "+6.0/level", note: "Tinggi" },
                            { stat: "Magic Defense", value: "+4.0/level", note: "Stabil & Linear" },
                            { stat: "Attack Speed", value: "+0.02/level", note: "Stabil" },
                            { stat: "HP Regen", value: "+0.6/level", note: "Bagus untuk sustain" }
                        ],
                        conclusion: ["+207 HP", "+6.8 Physical ATK", "+6.0 Physical Defense", "+4.0 Magic Defense", "+0.02 Attack Speed", "+0.6 HP Regen"]
                    },
                    mathilda: {
                        name: "Mathilda", icon: "🧚‍♀️",
                        stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                            rows: [
                                ["HP", "2530", "3334", "4339", "5344", false],
                                ["Physical ATK", "120", "147", "180", "214", true],
                                ["Physical Defense", "22", "38", "59", "80", false],
                                ["Magic Defense", "15", "25", "37", "50", false],
                                ["Attack Speed", "1.00", "1.02", "1.04", "1.07", false],
                                ["HP Regen", "6.8", "7.8", "9.4", "10.8", false],
                                ["Mana", "500", "900", "1400", "1900", false],
                                ["Mana Regen", "4.0", "4.8", "5.8", "6.8", false],
                                ["Movement SPD", "252", "252", "252", "252", false]
                            ]},
                        growth: [
                            { stat: "HP Growth", value: "+201 HP/level", note: "Stabil & Linear" },
                            { stat: "Physical ATK Growth", value: "+6.7 ATK/level", note: "Rata-rata +6.7" },
                            { stat: "Physical Defense", value: "+4.1/level", note: "Rata-rata +4.1" },
                            { stat: "Magic Defense", value: "+2.5/level", note: "Rata-rata +2.5" },
                            { stat: "Attack Speed", value: "+0.005/level", note: "Stabil" },
                            { stat: "HP Regen", value: "+0.28/level", note: "Rata-rata +0.28" },
                            { stat: "Mana", value: "+100/level", note: "Tepat +100" },
                            { stat: "Mana Regen", value: "+0.2/level", note: "Tepat +0.2" }
                        ],
                        conclusion: ["+201 HP", "+6.7 Physical ATK", "+4.1 Physical Defense", "+2.5 Magic Defense", "+0.005 Attack Speed", "+0.28 HP Regen", "+100 Mana", "+0.2 Mana Regen"]
                    },
                    carmilla: {
                        name: "Carmilla", icon: "🧛",
                        stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                            rows: [
                                ["HP", "2419", "3387", "4597", "5807", false],
                                ["Physical ATK", "126", "163", "209", "255", true],
                                ["Physical Defense", "25", "54", "91", "128", false],
                                ["Magic Defense", "15", "31", "51", "71", false],
                                ["Attack Speed", "1.14", "1.26", "1.41", "1.56", false],
                                ["HP Regen", "7.8", "9.4", "11.8", "14.0", false],
                                ["Mana", "500", "900", "1400", "1900", false],
                                ["Mana Regen", "4.0", "4.8", "5.8", "6.8", false],
                                ["Movement SPD", "255", "255", "255", "255", false]
                            ]},
                        growth: [
                            { stat: "HP Growth", value: "+242 HP/level", note: "Sangat Tinggi (Tanky)" },
                            { stat: "Physical ATK Growth", value: "+9.2 ATK/level", note: "Tinggi untuk Support" },
                            { stat: "Physical Defense", value: "+7.4/level", note: "Tinggi" },
                            { stat: "Magic Defense", value: "+4.0/level", note: "Stabil & Linear" },
                            { stat: "Attack Speed", value: "+0.03/level", note: "Cukup Cepat" },
                            { stat: "HP Regen", value: "+0.44/level", note: "Standar" }
                        ],
                        conclusion: ["+242 HP", "+9.2 Physical ATK", "+7.4 Physical Defense", "+4.0 Magic Defense", "+0.03 Attack Speed", "+0.44 HP Regen"]
                    },
                    faramis: {
                        name: "Faramis", icon: "☠️",
                        stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                            rows: [
                                ["HP", "2500", "3240", "4165", "5090", false],
                                ["Physical ATK", "118", "146", "181", "216", true],
                                ["Physical Defense", "20", "38", "60", "83", false],
                                ["Magic Defense", "15", "25", "37", "50", false],
                                ["Attack Speed", "0.98", "1.02", "1.07", "1.12", false],
                                ["HP Regen", "6.8", "7.8", "9.4", "10.8", false],
                                ["Mana", "500", "900", "1400", "1900", false],
                                ["Mana Regen", "4.0", "4.8", "5.8", "6.8", false],
                                ["Movement SPD", "240", "240", "240", "240", false]
                            ]},
                        growth: [
                            { stat: "HP Growth", value: "+185 HP/level", note: "Stabil & Linear" },
                            { stat: "Physical ATK Growth", value: "+7.0 ATK/level", note: "Konsisten" },
                            { stat: "Physical Defense", value: "+4.5/level", note: "Rata-rata" },
                            { stat: "Magic Defense", value: "+2.5/level", note: "Rata-rata" },
                            { stat: "Attack Speed", value: "+0.01/level", note: "Stabil" },
                            { stat: "HP Regen", value: "+0.3/level", note: "Rata-rata" },
                            { stat: "Mana", value: "+100/level", note: "Tepat +100" },
                            { stat: "Mana Regen", value: "+0.2/level", note: "Tepat +0.2" }
                        ],
                        conclusion: ["+185 HP", "+7.0 Physical ATK", "+4.5 Physical Defense", "+2.5 Magic Defense", "+0.01 Attack Speed", "+0.3 HP Regen", "+100 Mana", "+0.2 Mana Regen"]
                    },
                    kaja: {
                        name: "Kaja", icon: "⚡",
                        stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                            rows: [
                                ["HP", "2431", "3331", "4456", "5581", false],
                                ["Physical ATK", "120", "148", "183", "218", true],
                                ["Physical Defense", "25", "41", "62", "83", false],
                                ["Magic Defense", "15", "25", "37", "50", false],
                                ["Attack Speed", "1.05", "1.13", "1.23", "1.33", false],
                                ["HP Regen", "10.4", "12.8", "15.8", "18.8", false],
                                ["Movement SPD", "270", "270", "270", "270", false]
                            ]},
                        growth: [
                            { stat: "HP Growth", value: "+225 HP/level", note: "Sangat Tinggi & Stabil" },
                            { stat: "Physical ATK Growth", value: "+7.0 ATK/level", note: "Konsisten" },
                            { stat: "Physical Defense", value: "+4.1/level", note: "Rata-rata +4.1" },
                            { stat: "Magic Defense", value: "+2.5/level", note: "Rata-rata +2.5" },
                            { stat: "Attack Speed", value: "+0.02/level", note: "Stabil" },
                            { stat: "HP Regen", value: "+0.6/level", note: "Tepat +0.6" }
                        ],
                        conclusion: ["+225 HP", "+7.0 Physical ATK", "+4.1 Physical Defense", "+2.5 Magic Defense", "+0.02 Attack Speed", "+0.6 HP Regen"]
                    },
                    johnson: {
                        name: "Johnson", icon: "🚗",
                        stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                            rows: [
                                ["HP", "2700", "3700", "4950", "6200", false],
                                ["Physical ATK", "120", "145", "177", "209", true],
                                ["Physical Defense", "27", "59", "99", "139", false],
                                ["Magic Defense", "15", "31", "51", "71", false],
                                ["Attack Speed", "1.03", "1.09", "1.16", "1.24", false],
                                ["HP Regen", "8.4", "10.8", "13.8", "16.8", false],
                                ["Mana", "0", "0", "0", "0", false],
                                ["Mana Regen", "0", "0", "0", "0", false],
                                ["Movement SPD", "255", "255", "255", "255", false]
                            ]},
                        growth: [
                            { stat: "HP Growth", value: "+250 HP/level", note: "Sangat Tinggi (Tanky)" },
                            { stat: "Physical ATK Growth", value: "+6.4 ATK/level", note: "Standar" },
                            { stat: "Physical Defense", value: "+8.0/level", note: "Sangat Tinggi (Terbaik)" },
                            { stat: "Magic Defense", value: "+4.0/level", note: "Stabil & Linear" },
                            { stat: "Attack Speed", value: "+0.015/level", note: "Stabil" },
                            { stat: "HP Regen", value: "+0.6/level", note: "Bagus untuk sustain" },
                            { stat: "Mana", value: "0 (Rage User)", note: "Menggunakan Rage/Energy" }
                        ],
                        conclusion: ["+250 HP", "+6.4 Physical ATK", "+8.0 Physical Defense", "+4.0 Magic Defense", "+0.015 Attack Speed", "+0.6 HP Regen", "0 Mana (Rage User)"]
                    },
                    lolita: {
                        name: "Lolita", icon: "🛡️",
                        stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                            rows: [
                                ["HP", "2342", "3074", "3989", "4904", false],
                                ["Physical ATK", "115", "142", "177", "211", true],
                                ["Physical Defense", "20", "46", "80", "113", false],
                                ["Magic Defense", "15", "31", "51", "71", false],
                                ["Attack Speed", "0.98", "1.04", "1.11", "1.19", false],
                                ["HP Regen", "9.6", "12.0", "15.0", "18.0", false],
                                ["Mana", "500", "900", "1400", "1900", false],
                                ["Mana Regen", "4.0", "4.8", "5.8", "6.8", false],
                                ["Movement SPD", "260", "260", "260", "260", false]
                            ]},
                        growth: [
                            { stat: "HP Growth", value: "+183 HP/level", note: "Sangat Tinggi (Tanky)" },
                            { stat: "Physical ATK Growth", value: "+6.9 ATK/level", note: "Standar" },
                            { stat: "Physical Defense", value: "+6.6/level", note: "Tinggi" },
                            { stat: "Magic Defense", value: "+4.0/level", note: "Stabil & Linear" },
                            { stat: "Attack Speed", value: "+0.015/level", note: "Stabil" },
                            { stat: "HP Regen", value: "+0.6/level", note: "Bagus untuk sustain" }
                        ],
                        conclusion: ["+183 HP", "+6.9 Physical ATK", "+6.6 Physical Defense", "+4.0 Magic Defense", "+0.015 Attack Speed", "+0.6 HP Regen"]
                    },
                    minotaur: {
                        name: "Minotaur", icon: "🐂",
                        stats: { headers: ["Stat", "Level 1", "Level 5", "Level 10", "Level 15"],
                            rows: [
                                ["HP", "2750", "3806", "5126", "6446", false],
                                ["Physical ATK", "123", "143", "169", "195", true],
                                ["Physical Defense", "23", "49", "83", "116", false],
                                ["Magic Defense", "15", "31", "51", "71", false],
                                ["Attack Speed", "0.91", "0.99", "1.09", "1.19", false],
                                ["HP Regen", "8.8", "11.2", "14.2", "17.2", false],
                                ["Mana", "0", "0", "0", "0", false],
                                ["Mana Regen", "0", "0", "0", "0", false],
                                ["Movement SPD", "260", "260", "260", "260", false]
                            ]},
                        growth: [
                            { stat: "HP Growth", value: "+264 HP/level", note: "Sangat Tinggi (Tanky)" },
                            { stat: "Physical ATK Growth", value: "+5.1 ATK/level", note: "Standar" },
                            { stat: "Physical Defense", value: "+6.6/level", note: "Tinggi" },
                            { stat: "Magic Defense", value: "+4.0/level", note: "Stabil & Linear" },
                            { stat: "Attack Speed", value: "+0.02/level", note: "Stabil" },
                            { stat: "HP Regen", value: "+0.6/level", note: "Bagus untuk sustain" },
                            { stat: "Mana", value: "0 (Rage User)", note: "Menggunakan Rage" }
                        ],
                        conclusion: ["+264 HP", "+5.1 Physical ATK", "+6.6 Physical Defense", "+4.0 Magic Defense", "+0.02 Attack Speed", "+0.6 HP Regen", "0 Mana (Rage User)"]
                    }            
          }
    
    };    
