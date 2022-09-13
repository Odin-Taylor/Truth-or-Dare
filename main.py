def on_button_pressed_a():
    if Random_ == 2:
        basic.show_string("Yes")
    else:
        basic.show_string("No")
    basic.show_number(Random_)
input.on_button_pressed(Button.A, on_button_pressed_a)

Random_ = 0
Random_ = randint(0, 10)

def on_forever():
    pass
basic.forever(on_forever)
