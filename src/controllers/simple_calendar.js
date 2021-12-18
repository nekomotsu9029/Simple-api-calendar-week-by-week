let month_names = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre','Octubre', 'Noviembre', 'Diciembre'];

let day_names = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];

let current_date = new Date();
let current_day = current_date.getDate();
let get_day = current_date.getDay();
let month_number = current_date.getMonth();
let current_year = current_date.getFullYear();

const last_month = () => {
    if(month_number !== 0){
        month_number--;
    }else{
        month_number = 11;
        current_year--;
    }
    set_new_date();
}

const next_month = () => {
    if(month_number !== 11){
        month_number++;
    }else{
        month_number = 0;
        current_year++;
    }
    set_new_date();
}

const is_leap = () => {
    return ((current_year % 100 !==0) && (current_year % 4 === 0) || (current_year % 400 === 0));
}

const start_day = () => {
    let start = new Date(current_year, month_number, 1);
    return ((start.get_day()-1) === -1) ? 6 : start.get_day()-1;
}

const get_total_days = month => {
    if(month === -1) month = 11;

    if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) {
        return  31;

    } else if (month == 3 || month == 5 || month == 8 || month == 10) {
        return 30;

    } else {

        return is_leap() ? 29:28;
    }
}

const set_new_date = () => {
    current_date.setFullYear(current_year,month_number,current_day);
}

/*  */

const next_day = ()=>{
    current_day++;
    get_day++;
    if(get_day > 7){
        get_day = 1;
    }
    if(current_day>get_total_days(month_number)){
        next_month()
        current_day = 1;
    }
}

const obtain_vector_current_week = ()=>{
    let days_left_of_the_week = (8-get_day)
    let list_of_days_of_the_week = []
    for(let i=0; i<days_left_of_the_week; i++){
        let obj_day = {
            year: current_year,
            month: {
                number: (month_number+1),
                name: month_names[month_number]
            },
            day: {
                number: current_day,
                name: day_names[(get_day-1)]
            }
        }
        list_of_days_of_the_week.push(obj_day)
        next_day();
    }
    return list_of_days_of_the_week;
}

const get_week = count =>{// 1 = current week
    current_date = new Date();
    current_day = current_date.getDate();
    get_day = current_date.getDay();
    month_number = current_date.getMonth();
    current_year = current_date.getFullYear();
    if(count==1){
        return {
            count,
            current: true,
            data: obtain_vector_current_week()
        };
    }else if(count>1){
        for(let i=1; i<count; i++){
            let dias_restantes = (8-get_day);
            for(let j=0; j<dias_restantes; j++){
                next_day()
            }
        }
        return {
            count,
            current: false,
            data: obtain_vector_current_week()
        };
    }
}

module.exports = get_week;