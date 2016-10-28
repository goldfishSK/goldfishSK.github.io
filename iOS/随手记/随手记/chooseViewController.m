//
//  chooseViewController.m
//  随手记
//
//  Created by Mac on 16/8/3.
//  Copyright © 2016年 Mac. All rights reserved.
//

#import "chooseViewController.h"
#import "TableViewCell.h"
#import "bookViewController.h"
#import "FMDatabase.h"
#import "FMDatabaseAdditions.h"
#import "FMResultSet.h"
#import "customCollectionCell.h"
#import "chooseBookStyleViewController.h"
#import "leftViewController.h"
@interface chooseBookStyleViewController ()<UITableViewDataSource,UITableViewDelegate,UICollectionViewDataSource,UICollectionViewDelegate>

@end
@implementation chooseViewController
-(void)viewWillAppear:(BOOL)animated
{
    [__tableView reloadData];

    [super viewWillAppear:YES];
}
- (void)viewDidLoad {
    [super viewDidLoad];
    _cellArr =[[NSMutableArray alloc]init];
    [self.collectView registerNib:[UINib nibWithNibName:@"customCollectionCell" bundle:nil]forCellWithReuseIdentifier:@"cell"];
    // Do any additional setup after loading the view from its nib.
}
-(NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section
{
    return 2;
}
-(UITableViewCell*)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath
{
    if (indexPath.row==0)
    {
        TableViewCell * cell =[tableView dequeueReusableCellWithIdentifier:@"cell0"];
            cell =[[NSBundle mainBundle]loadNibNamed:@"TableViewCell" owner:nil options:nil][0];
            cell._textTF.text =self.textTF;

        selectRow =indexPath;

        return cell;

    }
    else
    {
        TableViewCell * cell =[tableView dequeueReusableCellWithIdentifier:@"cell1"];
            cell =[[NSBundle mainBundle]loadNibNamed:@"TableViewCell" owner:nil options:nil][1];
             _db =[[FMDatabase alloc]initWithPath:[NSHomeDirectory() stringByAppendingPathComponent:@"documents/money.sqlite"]];
            if (![_db open])
            {
                return nil;
            }
            FMResultSet * _RS =[_db executeQuery:@"SELECT * FROM t_accountBook WHERE accountBookID=1"];
            while ([_RS next])
            {
                NSString * str = [_RS stringForColumn:@"imgName"];
                NSLog(@"%@",str);
                if (self.imgStr==nil)
                {
                    self.imgStr =str;
                    cell._bookImg.image =[UIImage imageNamed:str];
                }else
                {
                    cell._bookImg.image =[UIImage imageNamed:self.imgStr];

                }
 
            }
            
            cell.accessoryType =UITableViewCellAccessoryDisclosureIndicator;
        
        
        return cell;

    }
}
-(void)tableView:(UITableView *)tableView didSelectRowAtIndexPath:(NSIndexPath *)indexPath
{
    if (indexPath.row==1)
    {
       chooseBookStyleViewController  *chooseBookVC =[[chooseBookStyleViewController alloc]init];
        [self.navigationController pushViewController:chooseBookVC animated:YES];
    }
}
- (IBAction)backBtn:(UIButton *)sender
{
    [self.navigationController popViewControllerAnimated:YES];
}
- (NSInteger)collectionView:(UICollectionView *)collectionView numberOfItemsInSection:(NSInteger)section
{
    return 6;
}

- (UICollectionViewCell *)collectionView:(UICollectionView *)collectionView cellForItemAtIndexPath:(NSIndexPath *)indexPath
{
    customCollectionCell * cell =[collectionView dequeueReusableCellWithReuseIdentifier:@"cell" forIndexPath:indexPath];
    if (self.imgStr==nil)
    {
        cell.mianbanImg.image =[UIImage imageNamed:[NSString stringWithFormat:@"WallPaper_%ld.jpg",indexPath.row]];

    }
    switch (indexPath.row)
    {
        case 0:
            cell.mianbianName.text =@"经典面板";
            if (cell.YesImg.image==nil)
            {
                cell.YesImg.image =[UIImage imageNamed:@"RadioButtonSelected"];

            }
            break;
        case 1:
            cell.mianbianName.text =@"旅游面板";
            
            break;

        case 2:
            cell.mianbianName.text =@"装修面板";
            
            break;

        case 3:
            cell.mianbianName.text =@"结婚面板";
            
            break;

        case 4:
            cell.mianbianName.text =@"汽车面板";
            
            break;

        case 5:
            cell.mianbianName.text =@"宝宝面板";
            
            break;

            
        default:
            break;
    }
    cell.tag =1001;
    [_cellArr addObject:cell];
    return cell;
}
- (void)collectionView:(UICollectionView *)collectionView didSelectItemAtIndexPath:(NSIndexPath *)indexPath
{
    customCollectionCell * cell =[collectionView cellForItemAtIndexPath:indexPath];

    for (customCollectionCell * cell in _cellArr)
    {
        if (cell.tag==1002)
        {
            cell.YesImg.image =[UIImage   imageNamed:@"NumberBackground"];
            cell.tag=1001;
        }
    }
    if (cell.tag==1001)
    {
        cell.YesImg.image =[UIImage imageNamed:@"RadioButtonSelected"];
        cell.tag =1002;
    }
}
- (IBAction)SaveBtn:(UIButton *)sender
{
    TableViewCell * cell = [__tableView cellForRowAtIndexPath:selectRow];
    NSLog(@"%@",cell);
    if (![_db open])
    {
        return;
    }
    [_db executeUpdate:[NSString stringWithFormat:@"INSERT INTO t_accountBook (name,imgName)VALUES('%@','%@')",cell._textTF.text,self.imgStr]];
    [_db close];
    
    NSNotificationCenter * center =[NSNotificationCenter defaultCenter];
    [center postNotificationName:@"saveData" object:nil];
    
    
    
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
