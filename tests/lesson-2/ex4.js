let height = 160;
let height_caculator = height%100;
let ideal_weight = (height_caculator * 9) / 10;
let max_weight = height_caculator;
let min_weight = (height_caculator * 8) / 10;

console.log("Cân nặng lý tưởng: " + ideal_weight +"\n"+ "Cân nặng tối đa: " + max_weight + "\n" + "Cân nặng tối thiếu: "+ min_weight)