(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"ball_atlas_", frames: [[0,305,54,38],[56,305,54,38],[112,305,54,38],[180,244,58,59],[183,61,59,59],[60,244,58,59],[0,61,59,59],[0,183,58,59],[60,183,58,59],[61,61,59,59],[120,183,58,59],[122,61,59,59],[180,183,58,59],[0,244,58,59],[0,0,59,59],[0,122,58,59],[61,0,59,59],[60,122,58,59],[120,122,58,59],[122,0,59,59],[180,122,58,59],[183,0,59,59],[120,244,58,59]]}
];


// symbols:



(lib.bird01 = function() {
	this.spriteSheet = ss["ball_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bird02 = function() {
	this.spriteSheet = ss["ball_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bird03 = function() {
	this.spriteSheet = ss["ball_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.c02 = function() {
	this.spriteSheet = ss["ball_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.c03 = function() {
	this.spriteSheet = ss["ball_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.c04 = function() {
	this.spriteSheet = ss["ball_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.c05 = function() {
	this.spriteSheet = ss["ball_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.c06 = function() {
	this.spriteSheet = ss["ball_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.c07 = function() {
	this.spriteSheet = ss["ball_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.c08 = function() {
	this.spriteSheet = ss["ball_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.c09 = function() {
	this.spriteSheet = ss["ball_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.c10 = function() {
	this.spriteSheet = ss["ball_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.c11 = function() {
	this.spriteSheet = ss["ball_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.c12 = function() {
	this.spriteSheet = ss["ball_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.c13 = function() {
	this.spriteSheet = ss["ball_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.c14 = function() {
	this.spriteSheet = ss["ball_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.c15 = function() {
	this.spriteSheet = ss["ball_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.c16 = function() {
	this.spriteSheet = ss["ball_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.c17 = function() {
	this.spriteSheet = ss["ball_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.c18 = function() {
	this.spriteSheet = ss["ball_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.c19 = function() {
	this.spriteSheet = ss["ball_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.c20 = function() {
	this.spriteSheet = ss["ball_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.c21 = function() {
	this.spriteSheet = ss["ball_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Path_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhLBNQgUgUAAg5QAAg3AUgVQAVgUA2AAQA3AAAUAUQAVAVAAA3QAAA4gUAVQgVAUg3AAQg2AAgVgUg");
	this.shape.setTransform(9.6,9.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_10, new cjs.Rectangle(0,0,19.2,19.5), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgkArQgCgDAAgEIAAhJIABgEQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAIADAAIAABEQAAALAKgEIA8gjQAEAEgFAEIhAAlIgGACQgBAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAAAg");
	this.shape.setTransform(3.9,4.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,7.9,8.8), null);


(lib.box = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Ah3MgIAA4/IDvAAIAAY/g");
	this.shape.setTransform(12,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.box, new cjs.Rectangle(0,-80,24,160), null);


(lib.bird = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{bool:27});

	// timeline functions:
	this.frame_14 = function() {
		this.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(53));

	// bool
	this.instance = new lib.c02();
	this.instance.parent = this;
	this.instance.setTransform(-58,-22);

	this.instance_1 = new lib.c03();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-58,-22);

	this.instance_2 = new lib.c04();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-58,-22);

	this.instance_3 = new lib.c05();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-58,-22);

	this.instance_4 = new lib.c06();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-58,-22);

	this.instance_5 = new lib.c07();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-58,-22);

	this.instance_6 = new lib.c08();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-58,-22);

	this.instance_7 = new lib.c09();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-58,-22);

	this.instance_8 = new lib.c10();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-58,-22);

	this.instance_9 = new lib.c11();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-58,-22);

	this.instance_10 = new lib.c12();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-58,-22);

	this.instance_11 = new lib.c13();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-58,-22);

	this.instance_12 = new lib.c14();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-58,-22);

	this.instance_13 = new lib.c15();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-58,-22);

	this.instance_14 = new lib.c16();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-58,-22);

	this.instance_15 = new lib.c17();
	this.instance_15.parent = this;
	this.instance_15.setTransform(-58,-22);

	this.instance_16 = new lib.c18();
	this.instance_16.parent = this;
	this.instance_16.setTransform(-58,-22);

	this.instance_17 = new lib.c19();
	this.instance_17.parent = this;
	this.instance_17.setTransform(-58,-22);

	this.instance_18 = new lib.c20();
	this.instance_18.parent = this;
	this.instance_18.setTransform(-58,-22);

	this.instance_19 = new lib.c21();
	this.instance_19.parent = this;
	this.instance_19.setTransform(-58,-22);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},27).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[]},1).to({state:[]},1).wait(19));

	// btn
	this.instance_20 = new lib.bird01();
	this.instance_20.parent = this;
	this.instance_20.setTransform(-51,-29);

	this.instance_21 = new lib.bird02();
	this.instance_21.parent = this;
	this.instance_21.setTransform(-51,-29);

	this.instance_22 = new lib.bird03();
	this.instance_22.parent = this;
	this.instance_22.setTransform(-51,-29);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_20}]}).to({state:[{t:this.instance_21}]},5).to({state:[{t:this.instance_22}]},5).to({state:[]},5).wait(52));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51,-29,54,38);


(lib.ball_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AjFDGQhShSAAh0QAAhzBShSQBShSBzAAQB0AABSBSQBSBSAABzQAAB0hSBSQhSBSh0AAQhzAAhShSg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ball_1, new cjs.Rectangle(-28,-28,56,56), null);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(4.2,-0.6,2.672,2.672,0,0,0,4.8,5.6);
	this.instance.alpha = 0.102;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgmAkIAAhJQAAgJAIAEIBEAoQAEADgFAEIhAAmIgGABQgFAAAAgIg");
	this.shape.setTransform(1.8,-3.2,2.672,2.672);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#82C822").s().p("AglAxQgHgCgBgLIAAhJQAAgIAFgDQAFgDAHADIABAAIBDAoIABAAIAAABQAFAEgBAEQAAAFgEADIgBAAIAAABIhBAmIgBAAQgEACgDAAIgEgBgAghAkIAAACIADgBIA+glIhBglg");
	this.shape_1.setTransform(1.9,-3.2,2.672,2.672);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E6E6E6").s().p("AhLAdQgKgKgFgVQgGgVABgaQAAAYAFAUQAFAUAKAKQAVAUA2AAQA3AAAVgUQAJgKAGgUQAFgTAAgZQAAAagFAVQgFAVgKAKQgVAVg3AAQg2AAgVgVg");
	this.shape_2.setTransform(0.2,12.1,2.672,2.672);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C0EB85").s().p("AhEAWQgPgPgDgrIAAgEQACAeAIASQAFAHADAEQATATAxAAQAyAAASgTQAOgOAEgjIABgKIAAAEQgBAqgSAQQgSATgyAAQgxAAgTgTg");
	this.shape_3.setTransform(0.1,6.6,2.672,2.672);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E1F6C6").s().p("AgHAJQgDAAgBgDQgBgGAMgGQALgGABAHQABADgEADQgDAEgFACQgDADgDAAIgCgBg");
	this.shape_4.setTransform(15.4,9.9,2.672,2.672);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E1F6C6").s().p("AgHAFQgBgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQABgFAKgBQAFAAADABQAAABABAAQAAAAABABQAAAAAAABQAAABAAAAQgBAFgKABIgCAAIgFgBg");
	this.shape_5.setTransform(-4.7,-22.8,2.672,2.672);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E1F6C6").s().p("AgNALQgFgBAAgFQAAgEAFgEQAGgFAHgCQAIgCAGABQAFACAAAEQAAAFgFAEQgGAFgIACIgHABIgGgBg");
	this.shape_6.setTransform(-12.9,-19.2,2.672,2.672);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C0EB85").s().p("AhDgIQAUgSAwAAQAyAAASASQAKAIAEASQgbgeg2ADQg0AEggAhQAFgbAKgJg");
	this.shape_7.setTransform(-0.2,-18.1,2.672,2.672);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#94DD2F").s().p("AhIAPQgEgDgEgIQBdANBEgyQgDAigOAOQgTATgxAAQgyAAgSgTg");
	this.shape_8.setTransform(1.4,7.5,2.672,2.672);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#82C822").s().p("AhEAeQgKgKgEgWQgFgVABgZQADAsAPAPQATATAxAAQAyAAASgTQASgQABgrQABAZgFAVQgEAWgLAKQgSATgyAAQgxAAgTgTg");
	this.shape_9.setTransform(0.1,8.6,2.672,2.672);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A5E24D").s().p("AhEBGQgSgTAAgzQAAgyASgTQATgSAxAAQAyAAASASQATATAAAyQAAAzgTATQgSASgyAAQgxAAgTgSg");
	this.shape_10.setTransform(0.2,-1.9,2.672,2.672);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhLBNQgUgVAAg4QAAg4AUgUQAVgVA2ABQA3gBAUAVQAVAUAAA4QAAA4gUAVQgVAUg3ABQg2gBgVgUg");
	this.shape_11.setTransform(0.1,-0.6,2.672,2.672);

	this.instance_1 = new lib.Path_10();
	this.instance_1.parent = this;
	this.instance_1.setTransform(2.7,3.6,2.672,2.672,0,0,0,10.7,10.8);
	this.instance_1.alpha = 0.199;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn, new cjs.Rectangle(-25.9,-26.7,51.8,53.4), null);


// stage content:
(lib.ball = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ball
	this.ball = new lib.ball_1();
	this.ball.parent = this;
	this.ball.setTransform(431,74.7);

	this.bird = new lib.bird();
	this.bird.parent = this;
	this.bird.setTransform(126,161,1,1,0,0,0,2,-8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bird},{t:this.ball}]}).wait(1));

	// Layer 1
	this.box = new lib.box();
	this.box.parent = this;
	this.box.setTransform(240,130.7);

	this.btn = new lib.btn();
	this.btn.parent = this;
	this.btn.setTransform(88.9,343.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn},{t:this.box}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(363,246.7,396,323.4);
// library properties:
lib.properties = {
	width: 600,
	height: 400,
	fps: 24,
	color: "#CCCCCC",
	opacity: 1.00,
	manifest: [
		{src:"images/ball_atlas_.png?1534085815452", id:"ball_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;