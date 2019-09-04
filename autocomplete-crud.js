var demoData = [
    {
        "name":"Afghanistan",
        "image": "https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/3/000/0d4/2f7/07a3d35.jpg",
        "location":"Seattle, WA"
    },
    {
        "name":"Albania",
        "image": "https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/3/000/0d4/2f7/07a3d35.jpg",
        "location":"Seattle, WA"
    },
    {
        "name":"Algeria",
        "image": "https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/3/000/0d4/2f7/07a3d35.jpg",
        "location":"Seattle, WA"
    },
    {
        "name":"Andorra",
        "image": "https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/3/000/0d4/2f7/07a3d35.jpg",
        "location":"Seattle, WA"
    },
    {
        "name":"Angola",
        "image": "https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/3/000/0d4/2f7/07a3d35.jpg",
        "location":"Seattle, WA"
    },

    {
        "name":"Angel Lewis",
        "image": "https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/3/000/0d4/2f7/07a3d35.jpg",
        "location":"Seattle, WA"
    },
    {
        "name":"Justin Dean",
        "image": "https://media.licdn.com/mpr/mpr/shrink_100_100/AAEAAQAAAAAAAAIMAAAAJGExNTE4OWY4LWU4ODMtNDA2ZS1iNWI1LWNkYmIyOWMyMGQ5Zg.jpg",
        "location":"Muscatine, IA"
    },
    {
        "name":"Nora Blake",
        "image": "https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/2/005/0b8/118/387e091.jpg",
        "location":"Seattle, WA"
    },
    {
        "name":"Russell Fox",
        "image": "https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/2/000/084/26e/2d9e05b.jpg",
        "location":"Albuquerque, NM"
    },
    {
        "name":"Daryl Bradley",
        "image": "https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/3/000/042/0ad/197566e.jpg",
        "location":"Buckeystown, MD"
    },
    {
        "name":"Benjamin Gonzales",
        "image": "https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/8/005/0b2/1c9/2a423c1.jpg",
        "location":"Atlanta, GA"
    },
    {
        "name":"Viola Francis",
        "image": "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAASJAAAAJGMyMTUzN2EyLTExY2ItNDZiNS1hMTY1LTI4NDA2NDMwZmFkNg.jpg",
        "location":"Zanesville, OH"
    },
    {
        "name":"Reginald Benson",
        "image": "https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/1/000/10f/3cc/275a407.jpg",
        "location":"Gilbert, AZ"
    },
    {
        "name":"Glenda Ray",
        "image": "https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/8/005/0ac/1ca/07c25a2.jpg",
        "location":"Baltimore, MD"
    },
    {
        "name":"Paula Vargas",
        "image": "https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/5/005/03e/073/36a5c47.jpg",
        "location":"Baltimore, MD"
    },
    {
        "name":"Mark Armstrong",
        "image": "https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/5/005/010/09b/39b122d.jpg",
        "location":"Hallandale Beach, FL"
    },
    {
        "name":"Jaime Campbell",
        "image": "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAATUAAAAJDJkY2Q1Mzk0LTI1YzItNDFhNy04ZmQ0LWY3NzZlZTZlNGVmYw.jpg",
        "location":"Zanesville, OH"
    },
    {
        "name":"Mike Beck",
        "image": "https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/2/000/01c/0d4/2b69e7c.jpg",
        "location":"Garner, NC"
    },
    {
        "name":"Ann Lowe",
        "image": "https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/7/000/1f6/019/29cd853.jpg",
        "location":"Cabin John, MD"
    },
    {
        "name":"Ryan Wolfe",
        "image": "https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/1/000/0bf/335/05a57f6.jpg",
        "location":"Los Angeles, CA"
    },
    {
        "name":"Dwayne Gutierrez",
        "image": "https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/3/000/29b/028/2426536.jpg",
        "location":"San Jose, CA"
    },
    {
        "name":"Bill Burke",
        "image": "https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/7/000/1bc/12e/1423106.jpg",
        "location":"Bakersfield, CA"
    }
];




(function($){
    $.fn.autocompleteCrud = function(options){ 
        var inputText = this;
        var settings = $.extend({
            //inp : ".autocomplete",    //default input field
            arr : demoData,          //default input data
            crudModal: null, //default modal
            submitModal : null
        }, options)

    console.log("_____ARRAY_DATA_______: ", settings.arr);
        return this.each(function(){
            autocompleteWithJson(this, settings.arr, settings.crudModal);

            $(document).on('click', settings.crudModal+" #crud-submit-btn", function(e){    
                if($.isFunction(settings.submitModal)){
                    var nameField = $(settings.crudModal).find('form[name="crud-form"] #name');
                    $(inputText).val(nameField.val());
                    $(settings.crudModal).modal('toggle');                                         
                    settings.submitModal.call(this, settings.arr, inputText);
                }                   
            });
            
            /////////////////////////////////////////////////////////////////////////
            function autocompleteWithJson(inp, arr, crudModal) {
                $(inp).attr("data-found", "false");
                /*the autocomplete function takes two arguments,
                the text field element and an array of possible autocompleted values:*/
                var currentFocus;
                /*execute a function when someone writes in the text field:*/
                // inp.addEventListener("input", function(e) {
                $(inp).on("input", function(e) {
                    var a, b, i, val = this.value;
                    /*close any already open lists of autocompleted values*/
                    closeAllLists();
                    if (!val) { return false;}
                    currentFocus = -1;
                    /*create a DIV element that will contain the items (values):*/
                    a = document.createElement("DIV");
                    a.setAttribute("id", this.id + "autocomplete-list");
                    a.setAttribute("class", "autocomplete-items");
                    /*append the DIV element as a child of the autocomplete container:*/
                    this.parentNode.appendChild(a);
                    /*for each item in the array...*/
                    var isFound = false;
                    for (i = 0; i < arr.length; i++) {
                      /*check if the item starts with the same letters as the text field value:*/        
                      if (arr[i].name.substr(0, val.length).toUpperCase() === val.toUpperCase()) {
                        /*create a DIV element for each matching element:*/
                        b = document.createElement("DIV");
                        /*make the matching letters bold:*/
                        b.innerHTML = "<strong>" + arr[i].name.substr(0, val.length) + "</strong>";
                        b.innerHTML += arr[i].name.substr(val.length);
                        /*insert a input field that will hold the current array item's value:*/
                        b.innerHTML += "<input type='hidden' value='" + arr[i].name + "'>";
                        /*execute a function when someone clicks on the item value (DIV element):*/
                        b.addEventListener("click", function(e) {
                            /*insert the value for the autocomplete text field:*/
                            inp.value = this.getElementsByTagName("input")[0].value;
                            $(inp).attr("data-found", "true");
                            /*close the list of autocompleted values,
                            (or any other open lists of autocompleted values:*/               
                            closeAllLists();
                        });
                        a.appendChild(b);            
                        isFound = true;
                      }
                    }
                    if(!isFound && crudModal != null){
                        //inp.value = null;
                        b = document.createElement("DIV");
                        b.setAttribute("id", this.id + "autocomplete-add-new");
                        b.setAttribute("class", "autocomplete-add-new");
                        b.setAttribute("data-toggle", "modal");
                        //b.setAttribute("data-target", "#modalAddMedicine1");
                        b.innerHTML ="Add new"; 
                        a.appendChild(b);
            
            
                        $(inp).attr("data-found", "false");
                    }
                });
                /*execute a function presses a key on the keyboard:*/
                //inp.addEventListener("keydown", function(e) {
                $(inp).on("keydown", function(e) {
                    $(inp).attr("data-found", "false");
                    var x = document.getElementById(this.id + "autocomplete-list");
                    if (x) x = x.getElementsByTagName("div");
                    if (e.keyCode == 40) {
                      /*If the arrow DOWN key is pressed,
                      increase the currentFocus variable:*/
                      currentFocus++;
                      /*and and make the current item more visible:*/
                      addActive(x);
                      if(x[currentFocus].innerText != "Add new"){
                        inp.value = x[currentFocus].innerText;
                        $(inp).attr("data-found", "true");
                      }          
                    } else if (e.keyCode == 38) { //up
                      /*If the arrow UP key is pressed,
                      decrease the currentFocus variable:*/
                      currentFocus--;
                      /*and and make the current item more visible:*/
                      addActive(x);
                      if(x[currentFocus].innerText != "Add new"){
                        inp.value = x[currentFocus].innerText;
                        $(inp).attr("data-found", "true");
                      }
                     
                    } else if (e.keyCode == 13) {
                      /*If the ENTER key is pressed, prevent the form from being submitted,*/
                      e.preventDefault();
                      if (currentFocus > -1) {
                        /*and simulate a click on the "active" item:*/
                        if (x) x[currentFocus].click();
                        $(inp).attr("data-found", "true");
                      }
                    }
                });
                function addActive(x) {
                  /*a function to classify an item as "active":*/
                  if (!x) return false;
                  /*start by removing the "active" class on all items:*/
                  removeActive(x);
                  if (currentFocus >= x.length) currentFocus = 0;
                  if (currentFocus < 0) currentFocus = (x.length - 1);
                  /*add class "autocomplete-active":*/
                  x[currentFocus].classList.add("autocomplete-active");
                }
                function removeActive(x) {
                  /*a function to remove the "active" class from all autocomplete items:*/
                  for (var i = 0; i < x.length; i++) {
                    x[i].classList.remove("autocomplete-active");
                  }
                }
                function closeAllLists(elmnt) {
                  /*close all autocomplete lists in the document,
                  except the one passed as an argument:*/
                  var x = document.getElementsByClassName("autocomplete-items");
                  for (var i = 0; i < x.length; i++) {
                    if (elmnt != x[i] && elmnt != inp) {
                      x[i].parentNode.removeChild(x[i]);
                    }
                  }
                }
                /*execute a function when someone clicks in the document:*/
                document.addEventListener("click", function (e) {
                    closeAllLists(e.target);
                });
            
            
                // $(document).on("click", "#"+inp.id+"autocomplete-add-new", function(e){
                //   var inputVal = $(inp).val();
                //   var $targetModal = $(crudModal);      
                //   $targetModal.attr("data-args", inputVal);
            
                //   var nameField = $(crudModal).find('form[name="crud-form"] #name');
                //   nameField.val(inputVal);     
                  
                //   //$(crudModal).css("margin-top", Math.max(0, ($(window).height() - $(crudModal).height()) / 2));
                 
                //   $(crudModal).modal('show'); 
                 
                // });    
                // $(document).on("click", +"autocomplete-add-new", function(e){
                // });
                //console.log("INPUT: ", inp.id+"autocomplete-add-new");
                // $(document).on('click',inp.id+'autocomplete-add-new', function(){
                //     alert("jj");
                // });
               
                $(document).on("click", "#"+inp.id+"autocomplete-add-new",  function (e) {
                    var inputVal = $(inp).val();
                    var targetModal = $(crudModal);
                    // console.log("__TARGET____:", settings.crudModal);
                    targetModal.attr("data-args", inputVal);
            
                    var nameField = $(crudModal).find('form[name="crud-form"] #name');
                    nameField.val(inputVal);                         
                    $(crudModal).modal('show');
                });

               
            
            
              }            
            /////////////////////////////////////////////////////////////////////////
            
        })
    }
}(jQuery));

