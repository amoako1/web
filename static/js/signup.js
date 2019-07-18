var su={
    person{},
    persons[],
    save function(){
        su.person.name=document.getElementById('studentname').value;
        su.person.gender=document.getElementById('gender').value;
        su.person.dob =document.getElementById('dob').value;
        su.person.username=document.getElementById('username').value;
        su.person.password=document.getElementById('password').value;

        if (su.validate()) {
            console.log(data saved successfully);
            console.log(su.person);
            su.persons.push(su.person);
            su.store(su.persons);
            su.person = {};
            document.getElementById(count).innerHTML=su.persons.length;
            document.getElementById(signupform).reset();
            su.show();
        }
    },
    validatefunction(){
        if (su.person.name==undefined  su.person.name==){
            alert(please enter the student name);
            return false;
        }
        if (su.person.gender==undefined  su.person.gender==){
            alert(please enter the gender);
            return false;
        }
        if (su.person.dob==undefined  su.person.dob==){
            alert(please enter the dob);
            return false;
        }
        if (su.person.username==undefined  su.person.username==){
            alert(please enter username);
            return false;
        }
        if (su.person.password==undefined  su.person.password==){
            alert(please enter the password);
            return false;
        }
        return true;
    },
    store function(object){
        if (localStorage){
            localStorage.setItem(signuptable,JSON.stringify(object));
        }
    },
    showfunction(){
        let disp= ;
        su.persons.forEach(p = {
            disp+=tr;
            disp+=td+p.name +td;
            disp+=td+p.username +td;
            disp+=td+p.gender +td;
            disp+=td+p.dob +td;
            
            
            disp+=tr;
        });
        document.getElementById(regStudents).innerHTML=disp;
    }
};

( function(){
    console.log(our js is working);
    var button = document.getElementById(btnsignup);
    button.addEventListener(click, su.save);
} )();