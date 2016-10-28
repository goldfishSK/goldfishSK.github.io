//
//  chooseBookStyleViewController.m
//  随手记
//
//  Created by mac on 16/8/5.
//  Copyright © 2016年 Mac. All rights reserved.
//
#import "chooseBookStyleViewController.h"
#import "bookCell.h"
#import "chooseViewController.h"
@interface chooseBookStyleViewController ()<UICollectionViewDataSource,UICollectionViewDelegate>
{
    NSMutableArray * arr;
}
@end

@implementation chooseBookStyleViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    arr =[[NSMutableArray alloc]init];
    // Do any additional setup after loading the view from its nib.
    [self._collectView registerNib:[UINib nibWithNibName:@"bookCell" bundle:nil] forCellWithReuseIdentifier:@"cell"];
    
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}
-(NSInteger)collectionView:(UICollectionView *)collectionView numberOfItemsInSection:(NSInteger)section
{
    return 6;
}
-(UICollectionViewCell*)collectionView:(UICollectionView *)collectionView cellForItemAtIndexPath:(NSIndexPath *)indexPath
{
    bookCell * cell =[collectionView dequeueReusableCellWithReuseIdentifier:@"cell" forIndexPath:indexPath];
    cell.cellImgStr =[NSString stringWithFormat:@"AccountBookCover%ld",indexPath.row+1];
    cell.bookImg.image =[UIImage imageNamed:cell.cellImgStr];
    cell.tag=1001;
    [arr addObject:cell];
    return cell;
}
- (IBAction)backBtn:(UIButton *)sender
{
    NSArray * VCarr =self.navigationController.viewControllers;
    chooseViewController * chooseVC =[VCarr objectAtIndex:1];
    for (bookCell * cell in arr)
    {
        if (cell.YESImg.image==nil)
        {
        }else
        {
            chooseVC.imgStr =cell.cellImgStr;

        }
    }
    [self.navigationController popViewControllerAnimated:YES];
   
}
-(void)collectionView:(UICollectionView *)collectionView didSelectItemAtIndexPath:(NSIndexPath *)indexPath
{
    
    bookCell *cell =[self._collectView cellForItemAtIndexPath:indexPath];
    for (bookCell * cell in arr)
    {
        if (cell.tag==1002)
        {
            cell.YESImg.image =nil;
            cell.tag=1001;
        }

    }

    if (cell.tag==1001)
    {
        cell.YESImg.image =[UIImage imageNamed:@"SyncFinished"];
        cell.tag=1002;

    }



    
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
