import { EGender, EAgeGroup } from "../../enums/common";
import { ICompany } from "./ICompany.interface";
import { IImage } from "./IImage.interface";

export interface IProduct {
    id?: string;
    prod_name: string;
    prod_thumb: string;
    prod_thumbnails?: IImage[];
    prod_company: ICompany; // Thương hiệu
    prod_sku: string; // Mã hàng hóa
    prod_slug: string;
    prod_price: number;
    prod_price_official?: number;
    prod_description: string;
    prod_gender: EGender[];
    prod_quantity: number; // Số lượng tồn
    prod_nation: string; // Xuất xứ
    prod_agePlay: EAgeGroup; //  Độ tuổi
    shipping_code?: string; // Mã vận chuyển
    discount?: number; // giảm giá
}
