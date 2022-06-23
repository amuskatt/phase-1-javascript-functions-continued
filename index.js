function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair = "*"){
    return function(remark = "a hard worker"){
            return `You are ${flair}${remark}${flair}!`

        }
 } 
wrapAdjective("||")("a dedicated programmer")