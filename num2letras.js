function numxletras() {
    var uni = [], dec =[], cen = [], num = [], buc =[], enletras = '', xenletras = '', xxenletras = '';
        uni = {0:"",1:"uno",2:"dos",3:"tres",4:"cuatro",5:"cinco",6:"seis",7:"siete",8:"ocho",9:"nueve"};
        dec = {10: "diez", 11 : "once", 12 : "doce", 13 : "trece", 14 : "catorce", 15 : "quince", 16 : "dieciseis", 17 : "diecisiete", 18 : "dieciocho", 19 : "diecinueve",20:"veinte",30:"treinta",40:"cuarenta",50:"cincuenta",60:"sesenta",70:"setenta",80:"ochenta",90:"noventa"};
        cen = {0:"",100:"ciento",200:"doscientos",300:"trescientos",400:"cuatrocientos",500:"quinientos",600:"seiscientos",700:"setecientos",800:"ochocientos",900:"novecientos"};
        buc={0:"",1:" mil ",2:" millones ",3:" mil ",4:" billones "};
    num = $('#textnum').val();
    passs = parseInt((num.length+2)/3);
    for (let index = 0; index < passs; index++) {
		numero = parseInt(num);
    		centenas=(numero%1000-numero%100); decenas=(numero%100-numero%10); unidades=numero%10; numx=decenas+unidades; numxx=centenas+decenas+unidades; 
	    	enletras += (numxx == 100) ? 'cien ' : cen[centenas] + ' ';   
			enletras += (numx == 1 && (index == 1 || index == 3)) ? '' :
						(numx == 1 && (index == 2 || index == 4)) ? 'un' :
						(numx <= 9) ? uni[numx] :
						(numx <= 20) ? dec[numx] :
						(numx == 21 && index >= 1) ? "veintiun" :
						(numx <= 29) ? 'veinti' + uni[unidades] :
						(numx <= 99 && unidades >= 1) ? dec[decenas] + ' y ' + uni[unidades] :
						(numx <= 99) ? dec[decenas] : '';
			enletras += (index == 1 && numx == 0 && centenas == 0) ? '' :
						(index == 2 && numx == 1) ? " millón " : buc[index] ;
        xxenletras = enletras + xxenletras; xenletras = ''; xenletras = enletras; 
        numxxx = (num-numxx)/1000; 
        	if (numxxx >= 1) { num = numxxx; enletras = ''; xenletras = ''; }
   }   
console.log(xxenletras); $('#result').html(xxenletras);
}
