<?php
/**
 * Contact Form 7 custom Jobs list - admin
 */
use StoutLogic\AcfBuilder\FieldsBuilder;

$options_builder = new FieldsBuilder( 'custom-options' );
$options_builder

	// Testimonials
	->addTab('Testimonials', ['placement' => 'left','wrapper' => ['width' => 5]])
	->addRepeater('testimonials_list', ['layout' => 'block', 'label' => 'Testimonial item', 'wrapper' => ['width' => 100]])
		->addText('testimonial_text', ['layout' => 'block', 'label' => 'Text', 'wrapper' => ['width' => 60]])
		->addText('testimonial_name', ['layout' => 'block', 'label' => 'Name', 'wrapper' => ['width' => 20]])
		->addText('testimonial_role', ['layout' => 'block', 'label' => 'Role', 'wrapper' => ['width' => 20]])
	->endRepeater()

    ->setLocation('options_page', '==', 'acf-options');

	add_action('acf/init', function() use ($options_builder) {
		acf_add_local_field_group( $options_builder->build() );
		//print_r($options_builder->build());             
	});