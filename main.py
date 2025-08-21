tstart = 0
tfaellt = 0

def on_forever():
    global tstart, tfaellt
    tstart = 0
    tfaellt = 0
    while tfaellt < 4:
        led.plot(0, 0)
        led.unplot(0, 0)
        tfaellt = 0
basic.forever(on_forever)
