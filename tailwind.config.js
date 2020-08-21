module.exports = {
  theme: {
    extend: {
      colors: {
        mainColor: "#38b143",
        bgDrawer: "#101214",
        textGray: "#838383",
      },
      minHeight: {
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "48px",
      },
      spacing: {
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "48px",
        "1/2": "50%",
        "1/3": "33.333333%",
        "2/3": "66.666667%",
        "1/4": "25%",
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "3/4": "75%",
        "4/5": "80%",
      },
    },
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"],
  },
  plugins: [],
}
