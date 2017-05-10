APRYL HOUSE CIM540 FINAL 
CODE PLAN 

My final project is an interactive art piece. I imagine this piece to function as a screensaver or as an interactive visualization to music. 
	
INPUT						OUTPUT										PSUEDOCODE 

object (watering can)	
follows mouse left/right    image of flowers appear in specified 		load image of watering can , follow mouse X and Y
							portion										with offset variables, generate particle variables (water) that 																		originate from image at specific origin and speed, load image 																		  of flowers and create if statements to link their display with 
																		the position of mouse X and mouse Y
sound
plays						image of sun scales up and down 			load sound, create variable to link sound source to 
							according to the amplitude 					amplitude, create variable to set scale of image to amplitude 																		  level 

animation
plays						sequence of images is pushed on				load image sequence, create array that changes 
							the screen 									images according to a millis variable, reset 
																		millis to allow for looping  
object (butterfly)
screen is loaded			image moves across screen					load image of butterfly, create x and y variables, set x 
																		and/or y variables to move with plus or minus, create 
																		if statement in order for image to reset (loop) 
																		
WRITE UP

 
    