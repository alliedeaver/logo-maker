const colorNames = [AliceBlue
    #F0F8FF
    AntiqueWhite
    #FAEBD7
    Aqua
    #00FFFF
    Aquamarine
    #7FFFD4
    Azure
    #F0FFFF
    Beige
    #F5F5DC
    Bisque
    #FFE4C4
    Black
    #000000
    BlanchedAlmond
    #FFEBCD
    Blue
    #0000FF
    BlueViolet
    #8A2BE2
    Brown
    #A52A2A
    BurlyWood
    #DEB887
    CadetBlue
    #5F9EA0
    Chartreuse
    #7FFF00
    Chocolate
    #D2691E
    Coral
    #FF7F50
    CornflowerBlue
    #6495ED
    Cornsilk
    #FFF8DC
    Crimson
    #DC143C
    Cyan
    #00FFFF
    DarkBlue
    #00008B
    DarkCyan
    #008B8B
    DarkGoldenRod
    #B8860B
    DarkGray
    #A9A9A9
    DarkGrey
    #A9A9A9
    DarkGreen
    #006400
    DarkKhaki
    #BDB76B
    DarkMagenta
    #8B008B
    DarkOliveGreen
    #556B2F
    DarkOrange
    #FF8C00
    DarkOrchid
    #9932CC
    DarkRed
    #8B0000
    DarkSalmon
    #E9967A
    DarkSeaGreen
    #8FBC8F
    DarkSlateBlue
    #483D8B
    DarkSlateGray
    #2F4F4F
    DarkSlateGrey
    #2F4F4F
    DarkTurquoise
    #00CED1
    DarkViolet
    #9400D3
    DeepPink
    #FF1493
    DeepSkyBlue
    #00BFFF
    DimGray
    #696969
    DimGrey
    #696969
    DodgerBlue
    #1E90FF
    FireBrick
    #B22222
    FloralWhite
    #FFFAF0
    ForestGreen
    #228B22
    Fuchsia
    #FF00FF
    Gainsboro
    #DCDCDC
    GhostWhite
    #F8F8FF
    Gold
    #FFD700
    GoldenRod
    #DAA520
    Gray
    #808080
    Grey
    #808080
    Green
    #008000
    GreenYellow
    #ADFF2F
    HoneyDew
    #F0FFF0
    HotPink
    #FF69B4
    IndianRed
    #CD5C5C
    Indigo
    #4B0082
    Ivory
    #FFFFF0
    Khaki
    #F0E68C
    Lavender
    #E6E6FA
    "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon","LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream","MistyRose", "Moccasin", "NavajoWhite",  "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "RebeccaPurple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"
    ];
const colorHex = ["", "#FFF0F5", "#7CFC00", "FFFACD","#ADD8E6", "#F08080","#E0FFFF", "#FAFAD2", "#D3D3D3", "#D3D3D3", "#90EE90", "#FFB6C1", "#FFA07A", "#20B2AA", "#87CEFA", "#778899", "#B0C4DE", "#FFFFE0", "#00FF00", "#32CD32", "#FAF0E6", "#FF00FF", "#800000", "66CDAA", "#0000CD", "#BA55D3", "#9370DB", "#3CB371", "#7B68EE", "#00FA9A", "#48D1CC", "#C71585", "#191970", "#F5FFFA", "#FFE4E1", "#FFE4B5", "#FFDEAD", "#000080", "#FDF5E6", "#808000", "#6B8E23", "#FFA500", "#FF4500", "#DA70D6", "#EEE8AA", "#98FB98", "#AFEEEE", "#DB7093", "#FFEFD5", "#FFDAB9", "#CD853F", "#FFC0CB", "#DDA0DD", "#B0E0E6", "#800080", "#663399", "#FF0000", "#BC8F8F", "#4169E1", "#8B4513", "#FA8072", "#F4A460", "#2E8B57",  "#FFF5EE", "#A0522D", "#C0C0C0", "#87CEEB", "#6A5ACD", "#708090", "#FFFAFA", "#00FF7F", "#4682B4", "#D2B48C", "#008080", "#D8BFD8", "#FF6347", "#40E0D0", "#EE82EE", "#F5DEB3" ,"#FFFFFF","#F5F5F5","#FFFF00", "#9ACD32"];

class Shapes {
    constructor (text, textColor, shape, shapeColor) {
        this.text = text
        this.textColor = textColor
        this.shape = shape
        this.shapeColor = shapeColor

        if (text <3 )
    }
};

class Circle extends Shape {
    constructor (text, textColor, shapes, shapeColor) {
        super(text, textColor, shapeColor)
    }
    render() {
        return '<svg width="300" height="300" versions="1.1"
 xmlns="http://www.w3.org/2000/svg">
<circle cx="150" cy="150" r="100" fill="${this.shapeColor}" /> <text x="75" y="175" fill="${this.textColor}" font-size="80px">${this.text}</text>
 </svg>'
}}

<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg"></svg>