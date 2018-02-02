app.service('sectionData', function() {
    
    this.sections = [{
            section:'1',
            link: 'sec-1',
            active: true
        },
        {
            section:'2',
            link: 'sec-2',
            active: false
        },
        {
            section:'3',
            link: 'sec-3',
            active: false
        },
        {
            section:'4',
            link: 'sec-4',
            active: false
        },
        {
            section:'5',
            link: 'sec-5',
            active: false
        },
        {
            section:'6',
            link: 'sec-6',
            active: false
        },
        {
            section:'7',
            link: 'sec-7',
            active: false
        },
        {
            section:'8',
            link: 'sec-8',
            active: false
        }                          
    ]
    
    this.changeActive = function(value) {
        for (var i = 0; i < this.sections.length; i++) {
            this.sections[i].active = false;

        }
        this.sections[value-1].active = true;
    }
    
    
    this.changeActive = function(value) {
        for (var i = 0; i < this.sections.length; i++) {
            this.sections[i].active = false;

        }
        this.sections[value-1].active = true;
    }
    this.scrollTo = function(eID) {
        var startY = currentYPosition();
        var stopY = elmYPosition(eID);
        var distance = stopY > startY ? stopY - startY : startY - stopY;
        if (distance < 100) {
            scrollTo(0, stopY);
            return;
        }
        var speed = Math.round(distance / 100);
        if (speed >= 20) speed = 20;
        var step = Math.round(distance / 25);
        var leapY = stopY > startY ? startY + step : startY - step;
        var timer = 0;
        if (stopY > startY) {
            for (var i = startY; i < stopY; i += step) {
                setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
                leapY += step;
                if (leapY > stopY) leapY = stopY;
                timer++;
            }
            return;
        }
        for (var i = startY; i > stopY; i -= step) {
            setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
            leapY -= step;
            if (leapY < stopY) leapY = stopY;
            timer++;
        }

        function currentYPosition() {
            // Firefox, Chrome, Opera, Safari
            if (self.pageYOffset) return self.pageYOffset;
            // Internet Explorer 6 - standards mode
            if (document.documentElement && document.documentElement.scrollTop)
                return document.documentElement.scrollTop;
            // Internet Explorer 6, 7 and 8
            if (document.body.scrollTop) return document.body.scrollTop;
            return 0;
        }

        function elmYPosition(eID) {
            var elm = document.getElementById(eID);
            var y = elm.offsetTop;
            var node = elm;
            while (node.offsetParent && node.offsetParent != document.body) {
                node = node.offsetParent;
                y += node.offsetTop;
            }
            return y;
        }
    };
        
    
    return this
})