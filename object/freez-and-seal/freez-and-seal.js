const frozenObj = Object.freeze({ a: 1 });
frozenObj.a = 2;
console.log(frozenObj.a); 

const sealedObj = Object.seal({ b: 1 });
sealedObj.b = 2;
sealedObj.c = 3;
console.log(sealedObj);

const settings = {
    theme: "dark",
    lang: "vi"
};

const sealedSetting = Object.seal(settings);
sealedSetting.theme = "light"; 
sealedSetting.lang = "en";
sealedSetting.newProp = "new"; 
delete sealedSetting.lang;
console.log(sealedSetting);