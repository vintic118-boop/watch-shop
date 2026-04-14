import * as z from 'zod';

<<<<<<< HEAD
export const ProductScalarFieldEnumSchema = z.enum(['id', 'slug', 'title', 'primaryImageUrl', 'type', 'priceVisibility', 'brandId', 'seoTitle', 'seoDescription', 'isStockManaged', 'maxQtyPerOrder', 'publishedAt', 'vendorId', 'createdAt', 'updatedAt', 'tag', 'status', 'categoryId', 'contentStatus', 'postContent', 'aiPromptUsed', 'aiGeneratedAt', 'sku'])
=======
export const ProductScalarFieldEnumSchema = z.enum(['id', 'slug', 'title', 'primaryImageUrl', 'type', 'priceVisibility', 'brandId', 'seoTitle', 'seoDescription', 'isStockManaged', 'maxQtyPerOrder', 'publishedAt', 'vendorId', 'createdAt', 'updatedAt', 'tag', 'status', 'categoryId', 'contentStatus', 'postContent', 'aiPromptUsed', 'aiGeneratedAt', 'sku', 'nickname', 'specStatus', 'storefrontImageKey'])
>>>>>>> abee89314fe18255e16893fab6a6a809101f3b48

export type ProductScalarFieldEnum = z.infer<typeof ProductScalarFieldEnumSchema>;