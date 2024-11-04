$(function(){
    $('button').click(function(){
     //alert('ok'); 
     var name = $('#name-text').val();
     var roll = $('#roll').val();
     var cls = $('#class-text').val();
     var section = $('#section-text').val();
     
     var ban_mark = $('#ban-text').val();
     var eng_mark = $('#eng-text').val();
     var math_mark = $('#math-text').val();
     var bio_mark = $('#bio-text').val();
     var phy_mark = $('#phy-text').val();
     var chem_mark = $('#chem-text').val();
     
     
     
     if (ban_mark>=80 && ban_mark<=100) {
            var gp = 5.00;
            var grade = 'A+';
        } 
        else if (ban_mark>=70 && ban_mark<=79) {
            var gp = 4.00;
            var grade = 'A';
        } 
        else if (ban_mark>=60 && ban_mark<=69) {
            var gp = 3.50;
            var grade = 'A-';
        } 
        else if (ban_mark>=50 && ban_mark<=59) {
            var gp = 3.00;
            var grade = 'B';
        } 
        else if (ban_mark>=40 && ban_mark<=49) {
            var gp = 2.00;
            var grade = 'C';
        } 
        else if (ban_mark>=33 && ban_mark<=39) {
            var gp = 1.00;
            var grade = 'D';
        } 
        else {
            var gp = 0.00; 
            var grade = 'F';
        }
     if (eng_mark>=80 && eng_mark<=100) {
            var gp_e = 5.00;
            var grade_e = 'A+';
        } 
        else if (eng_mark>=70 && eng_mark<=79) {
            var gp_e = 4.00;
            var grade_e = 'A';
        } 
        else if (eng_mark>=60 && eng_mark<=69) {
            var gp_e = 3.50;
            var grade_e = 'A-';
        } 
        else if (eng_mark>=50 && eng_mark<=59) {
            var gp_e = 3.00;
            var grade_e = 'B';
        } 
        else if (eng_mark>=40 && eng_mark<=49) {
            var gp_e = 2.00;
            var grade_e = 'C';
        } 
        else if (eng_mark>=33 && eng_mark<=39) {
            var gp_e = 1.00;
            var grade_e = 'D';
        } 
        else {
            var gp_e = 0.00; 
            var grade_e = 'F';
        }
     if (math_mark>=80 && math_mark<=100) {
            var gp_m = 5.00;
            var grade_m = 'A+';
        } 
        else if (math_mark>=70 && math_mark<=79) {
            var gp_m = 4.00;
            var grade_m = 'A';
        } 
        else if (math_mark>=60 && math_mark<=69) {
            var gp_m = 3.50;
            var grade_m = 'A-';
        } 
        else if (math_mark>=50 && math_mark<=59) {
            var gp_m = 3.00;
            var grade_m = 'B';
        } 
        else if (math_mark>=40 && math_mark<=49) {
            var gp_m = 2.00;
            var grade_m = 'C';
        } 
        else if (math_mark>=33 && math_mark<=39) {
            var gp_m = 1.00;
            var grade_m = 'D';
        } 
        else {
            var gp_m = 0.00; 
            var grade_m = 'F';
        }
     if (bio_mark>=80 && bio_mark<=100) {
            var gp_b = 5.00;
            var grade_b = 'A+';
        } 
        else if (bio_mark>=70 && bio_mark<=79) {
            var gp_b = 4.00;
            var grade_b = 'A';
        } 
        else if (bio_mark>=60 && bio_mark<=69) {
            var gp_b = 3.50;
            var grade_b = 'A-';
        } 
        else if (bio_mark>=50 && bio_mark<=59) {
            var gp_b = 3.00;
            var grade_b = 'B';
        } 
        else if (bio_mark>=40 && bio_mark<=49) {
            var gp_b = 2.00;
            var grade_b = 'C';
        } 
        else if (bio_mark>=33 && bio_mark<=39) {
            var gp_b = 1.00;
            var grade_b = 'D';
        } 
        else {
            var gp_b = 0.00; 
            var grade_b = 'F';
        }
     if (phy_mark>=80 && phy_mark<=100) {
            var gp_p = 5.00;
            var grade_p = 'A+';
        } 
        else if (phy_mark>=70 && phy_mark<=79) {
            var gp_p = 4.00;
            var grade_p = 'A';
        } 
        else if (phy_mark>=60 && phy_mark<=69) {
            var gp_p = 3.50;
            var grade_p = 'A-';
        } 
        else if (phy_mark>=50 && phy_mark<=59) {
            var gp_p = 3.00;
            var grade_p = 'B';
        } 
        else if (phy_mark>=40 && phy_mark<=49) {
            var gp_p = 2.00;
            var grade_p = 'C';
        } 
        else if (phy_mark>=33 && phy_mark<=39) {
            var gp_p = 1.00;
            var grade_p = 'D';
        } 
        else {
            var gp_p = 0.00; 
            var grade_p = 'F';
        }
     if (chem_mark>=80 && chem_mark<=100) {
            var gp_c = 5.00;
            var grade_c = 'A+';
        } 
        else if (chem_mark>=70 && chem_mark<=79) {
            var gp_c = 4.00;
            var grade_c = 'A';
        } 
        else if (chem_mark>=60 && chem_mark<=69) {
            var gp_c = 3.50;
            var grade_c = 'A-';
        } 
        else if (chem_mark>=50 && chem_mark<=59) {
            var gp_c = 3.00;
            var grade_c = 'B';
        } 
        else if (chem_mark>=40 && chem_mark<=49) {
            var gp_c = 2.00;
            var grade_c = 'C';
        } 
        else if (chem_mark>=33 && chem_mark<=39) {
            var gp_c = 1.00;
            var grade_c = 'D';
        } 
        else {
            var gp_c = 0.00; 
            var grade_c = 'F';
        }
        //console.log(name,roll);
     $('#dis-name').text(name);
     $('#dis-roll').text(roll);
     $('#dis-class').text(cls);
     $('#dis-section').text(section);
     
     $('#dis-ban').text(ban_mark);
     $('#dis-eng').text(eng_mark);
     $('#dis-math').text(math_mark);
     $('#dis-bio').text(bio_mark);
     $('#dis-phy').text(phy_mark);
     $('#dis-chem').text(chem_mark);
     
     $('#dis-ban-gp').text(gp);
     $('#dis-ban-grade').text(grade);
     $('#dis-eng-gp').text(gp_e);
     $('#dis-eng-grade').text(grade_e);
     $('#dis-math-gp').text(gp_m);
     $('#dis-math-grade').text(grade_m);
     $('#dis-bio-gp').text(gp_b);
     $('#dis-bio-grade').text(grade_b);
     $('#dis-phy-gp').text(gp_p);
     $('#dis-phy-grade').text(grade_p);
     $('#dis-chem-gp').text(gp_c);
     $('#dis-chem-grade').text(grade_c);
     //gpa
           var gpa= (gp+gp_e+gp_m+gp_b+gp_p+gp_c)/6;
     
     $('.gpa').text(gpa.toFixed(2));
           
    });
});
