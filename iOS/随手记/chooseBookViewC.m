//
//  chooseBookViewC.m
//  随手记
//
//  Created by mac on 16/8/5.
//  Copyright © 2016年 Mac. All rights reserved.
//

#import "chooseBookViewC.h"
#import "bookCell.h"
@interface chooseBookViewC ()<UICollectionViewDataSource,UICollectionViewDelegate>

@end

@implementation chooseBookViewC

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view from its nib.
    [self._collectView registerNib:[UINib nibWithNibName:@"bookCell" bundle:nil] forCellWithReuseIdentifier:@"cell"];

}
-(NSInteger)collectionView:(UICollectionView *)collectionView numberOfItemsInSection:(NSInteger)section
{
    return 6;
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}
-(UICollectionViewCell*)collectionView:(UICollectionView *)collectionView cellForItemAtIndexPath:(NSIndexPath *)indexPath
{
    bookCell * cell =[collectionView dequeueReusableCellWithReuseIdentifier:@"cell" forIndexPath:indexPath];
    cell.bookImg.image =[UIImage imageNamed:[NSString stringWithFormat:@"AccountBookCover%ld",indexPath.row+1]];
    return cell;
}
- (IBAction)backBtn:(UIButton *)sender
{
    [self.navigationController popViewControllerAnimated:YES];
}
-(void)collectionView:(UICollectionView *)collectionView didSelectItemAtIndexPath:(NSIndexPath *)indexPath
{
    
    bookCell *cell =[collectionView cellForItemAtIndexPath:indexPath];
    if (cell.isYES==NO)
    {
        cell.YESImg.image =[UIImage imageNamed:@"SyncFinished"];
        
    }else
    {
        cell.YESImg.image =nil;
    }
    cell.isYES =!cell.isYES;
    
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
