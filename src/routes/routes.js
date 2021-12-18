const express = require('express');
const router = express.Router();

const _last_consultation = require('../models/last_consultation')
const get_week = require('../controllers/simple_calendar.js')

const set_record_last_consultation = async (data)=>{
    const history = await _last_consultation.find();
    if(history.length == 0) {
        let historySave = new _last_consultation({
            initial_date: `${data[0].day.number}/${data[0].month.number}/${data[0].year}`,
            final_date: `${data[data.length-1].day.number}/${data[data.length-1].month.number}/${data[data.length-1].year}`
        })
        await historySave.save();
    }else{
        history[0] = {
            _id: history[0]._id,
            initial_date: `${data[0].day.number}/${data[0].month.number}/${data[0].year}`,
            final_date: `${data[data.length-1].day.number}/${data[data.length-1].month.number}/${data[data.length-1].year}`
        }    
        await _last_consultation.updateOne({_id: history[0]._id}, history[0]);
    }
}

router.get('/api/week/:count', async (req, res)=>{
    let {count} = req.params;
    count = parseInt(count, 10)
    let obj_response = {
        week: get_week(count),
        next_week: get_week(count+1)
    };
    if(count>1){
        obj_response.last_week = get_week(count-1);
    }
    await set_record_last_consultation(obj_response.week.data);
    res.json(obj_response)
})

module.exports = router;