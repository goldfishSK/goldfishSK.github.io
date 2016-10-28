//
//  ViewController.m
//  随手记
//
//  Created by Mac on 16/8/2.
//  Copyright © 2016年 Mac. All rights reserved.
//

#import "ViewController.h"
#import "customCell.h"
#import "JiYiBiViewController.h"
#import "DDMenuController.h"
#import "NSDate+date.h"
@interface ViewController ()<UITableViewDataSource,UITableViewDelegate>
{
    NSDate * date ;
}
@end

@implementation ViewController
-(void)viewWillAppear:(BOOL)animated
{
    [super viewWillAppear:animated];
    self.navigationController.navigationBarHidden =YES;
    [NSDate currentDateWithType:DateTypeToweek];
}
- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view from its nib.
    date =[NSDate date];
    NSDateFormatter * formatter =[[NSDateFormatter alloc]init];
    [formatter setDateFormat:@"M"];
    NSString* str =[formatter stringFromDate:date];
    NSDateFormatter * formatter1 =[[NSDateFormatter alloc]init];
    [formatter1 setDateFormat:@"yyyy"];
    NSString * yearStr =[formatter1 stringFromDate:date];
    self.datelab.text =str;
    self.yearLab.text =[NSString stringWithFormat:@"/%@",yearStr];
    
    
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}
-(NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section
{
    return 5;
}
-(UITableViewCell*)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath
{
    if (indexPath.row==0)
    {
        customCell * cell =[tableView dequeueReusableCellWithIdentifier:@"cellonly"];
        if (!cell)
        {
            cell =[[NSBundle mainBundle]loadNibNamed:@"customCell" owner:nil options:nil][0];
        }
        cell.cellOnlyLab.layer.cornerRadius =10;
        cell.cellOnlyLab.layer.masksToBounds=YES;
        cell.selectionStyle =UITableViewCellSelectionStyleNone;
        return cell;

    }
    else
    {
        customCell * cell =[tableView dequeueReusableCellWithIdentifier:@"cell"];
        if (!cell)
        {
            cell =[[NSBundle mainBundle]loadNibNamed:@"customCell" owner:nil options:nil][1];
            if (indexPath.row==1)
            {
                cell._cellImg.image =[UIImage imageNamed:@"TodayIcon"];
                cell._cellLab.text =@"今天";
                NSDateFormatter * formatter =[[NSDateFormatter alloc]init];
                [formatter setDateFormat:@"M月dd日"];
                NSString * str1 =[formatter stringFromDate:date];
                cell.dateLab.text =str1;
                
                NSDateFormatter * formatter1 =[[NSDateFormatter alloc]init];
                [formatter1 setDateFormat:@"dd"];
                NSString * str2 =[formatter1 stringFromDate:date];

                cell.cellIMGlab.text =str2;
            }
            if (indexPath.row==2)
            {
                cell._cellImg.image =[UIImage imageNamed:@"WeekIcon"];
                cell._cellLab.text =@"本周";
            }
            if (indexPath.row==3)
            {
                cell._cellImg.image =[UIImage imageNamed:@"MonthIcon"];
                NSDateFormatter * formatter =[[NSDateFormatter alloc]init];
                [formatter setDateFormat:@"MM"];
                NSString* str =[formatter stringFromDate:date];
                cell._cellLab.text =[NSString stringWithFormat:@"%@月",str];
                
                
            }
            if (indexPath.row==4)
            {
                cell._cellImg.image =[UIImage imageNamed:@"YearIcon"];
                cell._cellLab.text =@"本年";
            }
            cell.accessoryType =UITableViewCellAccessoryDisclosureIndicator;

        }
        
        return cell;

    }

}
-(void)tableView:(UITableView *)tableView didSelectRowAtIndexPath:(NSIndexPath *)indexPath
{
    if (indexPath.row==0)
    {
        JiYiBiViewController * jiyibiVC =[[JiYiBiViewController alloc]init];
        [self.navigationController pushViewController:jiyibiVC animated:YES];
    }
}
- (IBAction)backBtn:(UIButton *)sender
{
        [(DDMenuController *)[UIApplication sharedApplication].delegate.window.rootViewController showLeftController:YES];
    self.backBtn.imageView.image =[UIImage imageNamed:@"a.png"];
}
- (void)scrollViewDidScroll:(UIScrollView *)scrollView;
{
    _tableView.contentInset =UIEdgeInsetsMake(0, 0, 0, 0);
    CGFloat contentOff =scrollView.contentOffset.y;
    NSLog(@"%f",contentOff);
    self.backView.bounds =CGRectMake(0, 0, 414,277+contentOff);
    
    
    

//    CGRect ve =_backView.frame;
//    ve.origin.y =contentOff;
//    ve.size.height =-contentOff;
//    _backView.frame =ve;

}
/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/

@end
