//
//  leftViewController.m
//  随手记
//
//  Created by Mac on 16/8/2.
//  Copyright © 2016年 Mac. All rights reserved.
//

#import "leftViewController.h"
#import "customCollectionViewCell.h"
#import "FMDatabase.h"
#import "FMDatabaseAdditions.h"
#import "FMResultSet.h"
#import "bookViewController.h"
@interface leftViewController ()<UICollectionViewDataSource,UICollectionViewDelegate,UIScrollViewDelegate>
{
    NSMutableArray * bookArr;
    NSMutableArray * bookNameArr;
}
@end

@implementation leftViewController
-(void)viewWillAppear:(BOOL)animated
{
    [super viewWillAppear:animated];

    NSNotificationCenter * center =[NSNotificationCenter defaultCenter];
    [center addObserver:self selector:@selector(active) name:@"saveData" object:nil];
    NSLog(@"%@",NSHomeDirectory());
    NSString * newfilePath =[NSHomeDirectory() stringByAppendingPathComponent:@"documents/money.sqlite"];
    FMDatabase * _db =[[FMDatabase alloc]initWithPath:newfilePath];
    [bookNameArr removeAllObjects];
    [bookArr removeAllObjects];

    if (![_db open])
    {
        
    }
    FMResultSet * RS= [_db executeQuery:@"SELECT * FROM t_accountBook"];
    while ([RS next])
    {
        NSString * imgName =[RS stringForColumn:@"imgName"];
        NSString * labName =[RS stringForColumn:@"name"];
        
        [bookArr addObject:imgName];
        [bookNameArr addObject:labName];
        NSLog(@"%@",imgName);
    }
    [RS close];
    [_db close];

}
- (void)viewDidLoad {
    [super viewDidLoad];
    bookNameArr =[[NSMutableArray alloc]init];
    bookArr =[[NSMutableArray alloc]init];
    // Do any additional setup after loading the view from its nib.
    [self.collectView registerNib:[UINib nibWithNibName:@"customCollectionViewCell" bundle:nil] forCellWithReuseIdentifier:@"cell"];

   
}
-(void)active
{
    [_collectView reloadData];
}
-(NSInteger)collectionView:(UICollectionView *)collectionView numberOfItemsInSection:(NSInteger)section
{
    return bookArr.count;
}
-(UICollectionViewCell*)collectionView:(UICollectionView *)collectionView cellForItemAtIndexPath:(NSIndexPath *)indexPath
{

    
    
    customCollectionViewCell * cell =[collectionView dequeueReusableCellWithReuseIdentifier:@"cell" forIndexPath:indexPath];
    cell.bookLab.text =[bookNameArr objectAtIndex:indexPath.row];
    cell.bookImg.image =[UIImage imageNamed:[bookArr objectAtIndex:indexPath.row]];
    return cell;
}

- (IBAction)addBookBtn:(UIButton *)sender
{
    bookViewController * bookVC =[[bookViewController alloc]init];
    UINavigationController * nav =[[UINavigationController alloc]initWithRootViewController:bookVC];
    [self presentViewController:nav animated:YES completion:nil];
    
    //  切换根视图以及模态都会把导航特性销毁的
    //  直接对ddmenu进行切换
    
    
//    NSString * filePath =[NSHomeDirectory() stringByAppendingPathComponent:@"documents/money.sqlite"];
//    FMDatabase * _db =[[FMDatabase alloc]initWithPath:filePath];
//    if (![_db open])
//    {
//        
//    }
//    [_db executeUpdate:@"DELETE FROM t_accountBook"];
//    [_db close];
}
- (IBAction)editBtn:(UIButton *)sender {
}

@end
