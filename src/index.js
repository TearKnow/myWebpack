var moduleFunctions = require('./add-content.js') 
import calculator from './calculator.js';

document.write("My first webpack app 学习书本《webpack实战（入门进阶与调优）》 - by 居玉皓"+ "<br>");

moduleFunctions.firstFunc();
document.write(moduleFunctions.myName);



document.write("<br>" + calculator.name + '- 来自es6 module的导出，和上面add-content.js那种有什么区别呢');
document.write("<br>"+'2+3 = ' + calculator.add(2, 3) + '- 来自es6 module的导出方法');