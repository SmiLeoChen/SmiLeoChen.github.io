<?php
header("Content-Type:application/json");
$list=[];
$list[]=[
    'width'=>'152px',
    'height'=>'152px',
    'backgroundColor'=>'#e4393c'
];

$list[]=[
    'width'=>'152px',
    'height'=>'322px',
    'backgroundColor'=>'#ddd'
];

$list[]=[
    'width'=>'322px',
    'height'=>'152px',
    'backgroundColor'=>'#999'
];

$list[]=[
    'width'=>'152px',
    'height'=>'152px',
    'backgroundColor'=>'#e4393c'
];

$list[]=[
    'width'=>'322px',
    'height'=>'322px',
    'backgroundColor'=>'#555'
];

$list[]=[
    'width'=>'152px',
    'height'=>'152px',
    'backgroundColor'=>'#e4393c'
];

$list[]=[
    'width'=>'152px',
    'height'=>'322px',
    'backgroundColor'=>'#ddd'
];

$str=json_encode($list);
echo $str;
?>





