Feature: User Register
@Registration
Scenario: successful user registration

    When the user is on Your logo page
    When the user click on Sing in option
    And  the user write email address "automatizacion.pragma1@yopmail.com"
    And the user click on create a Count button
    And the user click on Mrs. option
    And the user write first name "Laura"
    And the user write Lastname "Pulgarin"
    And the user write passwd "123456"
    #FALTA FECHA DE CUMPLAÑOS
    And the user write Company Name "Pragma"
    And the user write address One "Calle Falsa 123"
    And the user write address Two "Calle Falsa 321"
    And the user write city "Medellín"
    And the user click on state box
    And the user select from state box
    And the user write phone "123456"
    And the user write celphone "123456"
    Then the user can see the name register "Laura Pulgarin"


    

