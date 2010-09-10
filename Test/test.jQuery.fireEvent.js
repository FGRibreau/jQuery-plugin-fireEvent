module("fireEvent");


  
test('$.fireEvent $.fn.fireEvent', function(){
  expect(4);
  
  var handler = function(e){
    ok(true, 'Event('+ e.type + ') received');
  }
  
  $('#qunit-fixture').bind('click', handler).click();
  
  $('#qunit-fixture').fireEvent('click');
  $.fireEvent($('#qunit-fixture'), 'click');
  $.fireEvent($('#qunit-fixture')[0], 'click');
  
  
  $('#qunit-fixture').unbind();
});

var preventDefault = function(){
  var preventDefault = function(e){e.preventDefault();};
  
  $('#iptsubmit').bind('click', preventDefault);
  $('#link').bind('click', preventDefault);
  
};

var handler = function(e){ok(true, 'Event('+ e.type + ') received');}

test('Click - bubbling', function(){
    var $elmts = $('#qunit-fixture *'),
        i = $elmts.length;
    
    expect(i*2);
    
    
    
    preventDefault();
   
    
    $('#qunit-fixture').bind('click', handler);
    
    //Pre-Check
    $elmts.click();
    
    //Real test
    while(i--){
      $elmts.fireEvent('click');
    }
    
    $('#qunit-fixture').unbind();
});

/*
//[initKeyboardEvent] Doesn't work w/ OPERA
test('Keyup', function(){
    var $elmts = $('#qunit-fixture input[type=text]'),
        i = $elmts.length;
    expect(i*2);
    
    preventDefault();
    
    $('#qunit-fixture').unbind().bind('keyup', handler);
    
    //Pre-Check
    $elmts.keyup();
    
    //Real test
    while(i--){
      $elmts.eq(i).fireEvent('keyup', {keyCode: 102, CharCode: 102});
    }
});*/

test('Dblclick - bubbling', function(){
    var $elmts = $('#qunit-fixture *'),
        i = $elmts.length;
    expect(i*2);
    
    preventDefault();
    
    $('#qunit-fixture').bind('dblclick', handler);
    
    //Pre-Check
    $elmts.dblclick();
    
    //Real test
    while(i--){
      $elmts.eq(i).fireEvent('dblclick');
    }
    
    $('#qunit-fixture').unbind();
});

test('Change - bubbling', function(){
    var $elmts = $('#qunit-fixture *'),
        i = $elmts.length;
    expect(i*2);
    
    preventDefault();
    
    $('#qunit-fixture').bind('change', handler);
    
    //Pre-Check
    $elmts.change();
    
    //Real test
    while(i--){
      $elmts.eq(i).fireEvent('change');
    }
    
    $('#qunit-fixture').unbind();
});


test('Blur - bubbling', function(){
    var $elmts = $('#qunit-fixture *'),
        i = $elmts.length;
    expect(i*2);
    
    preventDefault();
    
    $('#qunit-fixture').bind('blur', handler);
    
    //Pre-Check
    $elmts.blur();
    
    //Real test
    while(i--){
      $elmts.eq(i).fireEvent('blur');
    }
    
    $('#qunit-fixture').unbind();
});