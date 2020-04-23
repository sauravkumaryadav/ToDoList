const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/todolistDB",{useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify: false});
const itemSchema = new mongoose.Schema({
    name:String
});

const Item = new mongoose.model("Item",itemSchema);
const item1 = new Item({
    name:"Welcome to your todolist"
});
const item2 = new Item({
    name:"Hit the + button to add a new item"
});
const item3 = new Item({
    name:"<-- Hit this to delete this item"
});
const defaultItems = [item1 , item2 , item3];
const listSchema = new mongoose.Schema({
    name:String,
    items:[itemSchema]
});
const List = new mongoose.model("List",listSchema);

app.get("/:customListName", function (req, res) {
    const customListName = _.capitalize(req.params.customListName);
    List.findOne({name:customListName},function(err,foundList){
        if(!err){
            if(!foundList){
                //not exist so create a new list
                const list =new List({
                    name:req.params.customListName,
                    items:defaultItems
                });
                list.save();
                res.redirect("/"+customListName);
            }
            else{
                //already exists
                res.render("lists",{day:foundList.name,items:foundList.items});
            }
        }
    });
    
});


app.get("/", function (req, res) {

    
    Item.find(function(err,result){
        if(result.length===0){
            Item.insertMany(defaultItems,function(err,result){
    if(err){console.log(err);}
    else{console.log("succesfully inserted all default items to your db");}
});
res.redirect("/");
        }

        else{
            res.render('lists', {
                day: "Today",
                items: result
            });
        }
        
            
    });


});

app.post("/delete",function(req,res){ 
    const listName = req.body.listName;
    if(listName==="Today"){
        Item.findByIdAndDelete(req.body.checkbox,function(err,result){
            if(!err)
            {
            console.log("succesfully deleted");
        res.redirect("/");}
            
});
    }
    else{
        List.findOneAndUpdate({name:listName},{$pull: {items: {_id:req.body.checkbox}}},function(err,foundList){
            if(!err){
                res.redirect("/"+listName);
            }
        });
    }
});

app.post("/", function (req, res) {
   const listName=req.body.list;
    const item = new Item({
        name: req.body.newItem
    });
    if(listName==="Today")
    {
        item.save();
        res.redirect("/");
    }
    else{
        List.findOne({name:listName},function(err,foundList){
            foundList.items.push(item);
            foundList.save();
            res.redirect("/"+listName);
        });
    }
   


});

app.get("/work", function (req, res) {
    res.render('lists', {
        day: "Work-List",
        items: workItems
    });
});



app.listen(5000, function () {
    console.log("server is listening on port 5000");
});