/**
 * Created by lenovo on 2017/8/1.
 */
export default class Onoff {
    constructor(options) {
        this.state = options.state || false;
        this.width = options.width;
        this.height = options.height;
        this.container = $(options.container);
        this.rightRange = this.width - this.height;
        this.leftRange = 0;
        this.trueColor = '#58de58';
        this.falseColor = '#fff';
        this.callback = options.callback;
        this.createEle();
        this.addEvent();
    }

    createEle() {
        var left = this.state ? 0 : this.rightRange;
        var bgColor = this.state ? this.trueColor : this.falseColor;
        this.container.append($('<div>').addClass('js-switch_box').css({
            'width': this.width,
            'height': this.height,
            'border-radius': this.height / 2,
            'border': '1px solid #ccc',
            'position': 'relative',
            'background': bgColor
        }).append(
            $('<div>').addClass('js-switch_lock').css({
                'position': 'absolute',
                'top': 0,
                'left': left,
                'width': this.height,
                'height': this.height,
                'border-radius': '50%',
                'box-shadow': '0 0 1px 2px #ccc',
                'background': '#fff'
            }).data('state', this.state)))
    }

    addEvent() {
        this.container.find('.js-switch_lock').on('mousedown', (e) => {
            e.preventDefault();
            var self = $(e.target);
            var initx = e.pageX;
            var initLeft = e.target.offsetLeft;
            var switch_move = (e) => {
                var left = e.pageX - initx + initLeft;
                if (left > this.rightRange) {
                    left = this.rightRange;
                } else if (left < this.leftRange) {
                    left = this.leftRange
                }
                self.css({left})
            };
            var up = (e) => {
                var left = e.pageX - initx + initLeft;
                if (e.pageX - initx > 1) {
                    self.css({
                        left: this.rightRange,
                    }).data('state', false).parent().css('background', this.falseColor);
                    typeof this.callback === 'function' && this.callback(false);
                } else if (e.pageX - initx < -1) {
                    self.css({
                        left: this.leftRange
                    }).data('state', true).parent().css('background', this.trueColor);
                    typeof this.callback === 'function' && this.callback(true);
                }
                $('body').off('mousemove', switch_move);
                $('html').off('mouseup', up)
            };
            $('body').on('mousemove', switch_move);
            $('html').on('mouseup', up)
        });
        this.container.find('.js-switch_box').on('click', (e) => {
            if ($(e.target).hasClass('js-switch_box')) {
                let curTarget = $(e.target).children('.js-switch_lock');
                if (e.offsetX > curTarget[0].offsetLeft) {
                    curTarget.animate({left: this.rightRange}, 100, 'linear', () => {
                        curTarget.data('state', false).parent().css('background', this.falseColor);
                        typeof this.callback === 'function' && this.callback(false);
                    })
                } else if (e.offsetX < curTarget[0].offsetLeft) {
                    curTarget.animate({left: this.leftRange}, 100, 'linear', () => {
                        curTarget.data('state', true).parent().css('background', this.trueColor);
                        typeof this.callback === 'function' && this.callback(true);
                    })
                }
            }
        })
    }

    turnOn(target){
        target.animate({left: this.leftRange}, 100, 'linear', () => {
            target.data('state', true).parent().css('background', this.trueColor);
        })
    }

    turnOff(target){
        target.animate({left: this.rightRange}, 100, 'linear', () => {
            target.data('state', false).parent().css('background', this.falseColor);
        })
    }
}