
if(__engine__ == "rhino"){
  __importClassOld__ = importClass;
  var importClass = function(pack){
    if(typeof(pack) == "string"){
        __importClassOld__(Packages[pack]);
    }else{
        __importClassOld__(pack);
    }
  }
}

var toast = function(text){
    droid.toast(text);
}

var launchPackage = function(package){
    droid.launchPackage(package);
}

var launch = function(a, b){
    if(arguments.length == 2){
        droid.launch(a, b);
    }else{
        droid.launchPackage(a);
    }
}

var launchApp = function(appName){
    droid.launchApp(appName);
}

function performAction(action, args){
    if(args.length == 4){
        return action(droid.bounds(args[0], args[1], args[2], args[3]));
    }else if(args.length == 2){
        return action(droid.text(args[0], args[1]));
    }else {
        return action(droid.text(args[0], -1));
    }
}

var click = function(){
    return performAction(function(target){
        return droid.click(target);
    }, arguments);
}

var longClick = function(a, b, c, d){
    return performAction(function(target){
        return droid.longClick(target);
    }, arguments);
}



var scrollUp = function(a, b, c, d){
    if(arguments.length == 0)
        return droid.scrollAllUp();
    if(arguments.length == 1 && typeof a === 'number')
        return droid.scrollUp(a);
    return performAction(function(target){
        return droid.scrollUp(target);
    }, arguments);
}

var scrollDown = function(a, b, c, d){
     if(arguments.length == 0)
        return droid.scrollAllDown();
     if(arguments.length == 1 && typeof a === 'number')
        return droid.scrollDown(a);
      return performAction(function(target){
        return droid.scrollDown(target);
    }, arguments);
}

var select = function(a, b, c, d){
    return performAction(function(target){
        return droid.select(target);
    }, arguments);
}

var input = function(a, b){
    if(arguments.length == 1){
        return droid.setText(droid.editable(-1), a);
    }else{
        return droid.setText(droid.editable(a), b);
    }
}

var sleep = function(millis){
    droid.sleep(millis);
}

var isStopped = function(){
    return droid.isStopped();
}

var notStopped = function(){
    return !isStopped();
}

var log = function(str){
    droid.log(str);
}

var print = log;

var err = function(e){
   droid.err(e);
}

var openConsole = function(){
    droid.console();
}

var clearConsole = function(){
    droid.clearConsole();
}

var shell = function(cmd, root){
    root = root ? 1 : 0;
    return droid.shell(cmd, root);
}

var currentPackage = function(){
    return droid.currentPackage();
}

var currentActivity = function(){
    return droid.currentActivity();
}

var setClip = function(text){
    droid.setClip(text);
}

var getPackageName = function(appName){
    return droid.getPackageName(appName);
}

var openAppSetting = function(packageName){
    return droid.openAppSetting(packageName);
}

var Tap = function(x, y){
    return shell("input tap " + x + " " + y, true).code == 1;
}

var Swipe = function(x1, y1, x2, y2, duration){
    if(arguments.length == 5){
        return shell("input swipe " + x1 + " " + y1 + " " + x2 + " " + y2 + " " + duration, true).code == 1;
    }
    return shell("input swipe " + x1 + " " + y1 + " " + x2 + " " + y2, true).code == 1;
}

var KeyCode = function(keyCode){
    return shell("input keyevent " + keyCode, true).code == 1;
}

var Home = function(){
    return KeyCode(3);
}

var Back = function(){
    return KeyCode(4);
}

var Power = function(){
    return KeyCode(26);
}

var Up = function(){
    return KeyCode(19);
}

var Down = function(){
    return KeyCode(20);
}

var Left = function(){
    return KeyCode(21);
}

var Right = function(){
    return KeyCode(22);
}

var OK = function(){
    return KeyCode(23);
}

var VolumeUp = function(){
    return KeyCode(24);
}

var VolumeDown = function(){
    return KeyCode(25);
}

var Menu = function(){
    return KeyCode(1);
}

var Camera = function(){
    return KeyCode(27);
}

var Text = function(text){
     return shell("input text " + text, true).code == 1;
}

var __selector__ = droid.selector();
var __obj__ = new java.lang.Object();

for(var x in __selector__){
    if(!__obj__[x] && !this[x]){
        this[x] = (function(method) {
            return function(){
                var s = droid.selector();
                //这里不知道怎么写。尴尬。只能写成这样。
                if(arguments.length == 0){
                   return s[method]();
                }else if(arguments.length == 1){
                   return s[method](arguments[0]);
                }else if(arguments.length == 2){
                   return s[method](arguments[0], arguments[1]);
                }else if(arguments.length == 3){
                   return s[method](arguments[0], arguments[1], arguments[2]);
                }else if(arguments.length == 4){
                   return s[method](arguments[0], arguments[1], arguments[2], arguments[3]);
                }else{
                   return s[method].call(s, Array.prototype.slice.call(arguments));
                }
            };
        })(x);
    }

}

var $ = function(){
    return droid.selector();
}

__importClassOld__(com.stardust.scriptdroid.droid.runtime.Shell);

/*
importClass("com.stardust.scriptdroid.service.AccessibilityDelegate");

var addAccessibilityDelegate = function(delegate){
    droid.addAccessibilityDelegate(delegate);
}
*/