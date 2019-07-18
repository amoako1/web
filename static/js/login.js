var su={
    person:{},
    persons:[],
    save: function(){
        su.person.username=document.getElementById('username').value;
        su.person.password=document.getElementById('password').value;

        if (su.validate()) {
            console.log("data saved successfully");
            console.log("su.person");
            su.persons.push(su.person);
            su.store(su.person);
            document.getElementById("loginform").reset();
        }
    },
    validate:function(){
        if (su.person.username!="username" || su.person.username==""){
            alert("please enter username");
            return false;
        }
        if (su.person.password!="password" || su.person.password==""){
            alert("please enter the password");
            return false;
        }
        return true;
    },
    store: function(object){
        if (localStorage){
            localStorage.setItem("logintable",JSON.stringify(object));
        }
    }
};