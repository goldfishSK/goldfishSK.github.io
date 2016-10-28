//
//  bookViewController.m
//  随手记
//
//  Created by Mac on 16/8/3.
//  Copyright © 2016年 Mac. All rights reserved.
//

#import "bookViewController.h"
#import "mycustomcell.h"
#import "chooseViewController.h"
@interface bookViewController ()<UITableViewDataSource,UITableViewDelegate>

@end

@implementation bookViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    self.navigationController.navigationBarHidden =YES;
    // Do any additional setup after loading the view from its nib.
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}
-(NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section
{
    return 7;
}
-(UITableViewCell*)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath
{
    mycustomcell * cell =[tableView dequeueReusableCellWithIdentifier:@"cell"];
    if (!cell)
    {
        cell =[[NSBundle mainBundle]loadNibNamed:@"mycustomcell" owner:nil options:nil][0];
        
            cell.headImg.image =[UIImage imageNamed:[NSString stringWithFormat:@"AccountBookTemplate%ld",indexPath.row+1]];
        switch (indexPath.row)
        {
            case 0:
                cell.bigLab.text =@"标准理财";
                cell.smallLab.text =@"标准账本，分类较全";

                break;
            case 1:
                cell.bigLab.text =@"生意账本";
                cell.smallLab.text =@"帮你轻松打理生意流水帐";
                
                break;
            case 2:
                cell.bigLab.text =@"旅游账本";
                cell.smallLab.text =@"适合出游，精心定义旅行分类";
                
                break;
            case 3:
                cell.bigLab.text =@"装修账本";
                cell.smallLab.text =@"装修必备，贴心为装修场景打造";
                
                break;
            case 4:
                cell.bigLab.text =@"结婚账本";
                cell.smallLab.text =@"进入神圣殿堂前，记一记更幸福";
                
                break;
            case 5:
                cell.bigLab.text =@"汽车账本";
                cell.smallLab.text =@"轻松记录爱车消费";
                
                break;
            case 6:
                cell.bigLab.text =@"宝宝账本";
                cell.smallLab.text =@"亲爱的宝贝";
                
                break;

            
            default:
                break;
        }
    }
    cell.accessoryType =UITableViewCellAccessoryDisclosureIndicator;
    return cell;
}
-(void)tableView:(UITableView *)tableView didSelectRowAtIndexPath:(NSIndexPath *)indexPath
{
    NSLog(@"%ld",indexPath.row);
    mycustomcell * cell =[tableView cellForRowAtIndexPath:indexPath];
    chooseViewController * chooseVC =[[chooseViewController alloc]init];
    chooseVC.textTF =cell.bigLab.text;
    [self.navigationController pushViewController:chooseVC animated:YES];
}
- (IBAction)clooseBtn:(UIButton *)sender
{
    [self dismissViewControllerAnimated:YES completion:nil];
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
