$('body')
    .append(
        $('<h1>').text('Todo List').addClass('heading')
    )
    .append(
        $('<div>').addClass('inpdetails')
        .append(
            $('<input>')
                .attr('placeholder','Enter New Task')
                .addClass('newtask')
        )
        .append(
            $('<button>').text('Add Task').addClass('btn')
            .click(ev=>{
                if($('.newtask').val().trim()!=''){
                    $('.tasklist')
                    .append(
                        $('<li>').addClass('task')
                            .text(
                                $('.newtask').val()
                        )
                        .append(
                            $('<div>').addClass('btngrp')
                            .append(
                                $('<button>').text('⬆').addClass('upbtn')
                            )
                            .append(
                                $('<button>').text('⬇').addClass('dwnbtn')
        
                            )
                            .append(
                                $('<button>').text('X').addClass('delbtn')
        
                            )
                        )
                        
                    )
                    $('.newtask').val("")
                }
            })
        )
    )
    
    .append(
        $('<ul>').addClass('tasklist').click(ev=>{
            if($(ev.target).hasClass('upbtn')){
                ($(ev.target).parent().parent())
                    .insertBefore($(ev.target).parent().parent().prev())
                // console.log($(ev.target).parent().parent().prev())
            }
            else if($(ev.target).hasClass('dwnbtn')){
                // console.log('dwn press kia')
                ($(ev.target).parent().parent())
                    .insertAfter($(ev.target).parent().parent().next())

            }
            else if($(ev.target).hasClass('delbtn')){
                // console.log('del press kia')
                ($(ev.target).parent().parent().remove())
            }
        })
    )
